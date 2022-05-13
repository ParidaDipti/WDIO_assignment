import { wayFinderData } from "../data/hotel_test_data";
import { IHotelInfo } from "../dsl/models/hotel-info";
import Page from "./page";

class HotelResultsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get resultsTopMessage() {
        return $('#ResultsTopMessageContainer')
    }

    get hotelCount() {
        return $$('[id^=hotel-name]')
    }

    get wayFinderInfo() {
        return $('.wayfinder-info')
    }

    get hotelAddresses() {
        return $$('[id^=hotel-address]')
    }

    get starRatingFilter() {
        return $('#StarRating')
    }

    get starRatingHotels() {
        return $$('.hotel-results-hotel-info dt:nth-child(3)')
    }

    get sortOrder() {
        return $('.js-sort-results.btn-link.active-sort-')
    }

    get hotelNameFilter() {
        return $('#HotelName')
    }

    get hotelAddress() {
        return $$('[id^=hotel-address]')
    }

    get hotelSearchResults() {
        return $('#HotelSearchResults')
    }

    get hotelNames() {
        return $$('.hotel-results-hotel-info dd:nth-child(2) a')
    }

    get roomList() {
        return $('[data-scroll-target="roomList"]')
    }
    
    get paginationCount(){
        return $('.hotel-results-pagination-count-header')
    }

    get wayFinderCheckInDate() {
        return $('#txtCheckInOutM span:nth-child(1)')
    }

    get wayFinderCheckOutDate() {
        return $('#txtCheckInOutM span:nth-child(2)')
    }

    get wayFinderGuest() {
        return $('.js-wayfinder-prefered-search')
    }

    get hotelDetailGrid() { return $('.hotel-details-grid-container') }

    public open () {
        return super.open('HotelResults');
    }

    public async clickStarRatingFilter() {
        await this.starRatingFilter.waitForDisplayed()
        await this.starRatingFilter.click()
    }

    public async getSortOrder(order: string) {
        await this.hotelSearchResults.waitForDisplayed()
        await expect($(`.js-sort-results.btn-link.active-sort-${order}`)).toBeDisplayed()
    }

    public async clickHotelNameFilter() {
        await this.hotelNameFilter.waitForDisplayed()
        await this.hotelNameFilter.click()
    }

    public async getHotelAddress() {
        await this.hotelSearchResults.waitForDisplayed()
        await this.hotelAddresses.map(async element => {
            const address = await element.getText()
            expect(address).toContain("Pune")
        })
    }

    public async selectHotelName(hotel: string) {
        await this.hotelSearchResults.waitForDisplayed()
        await this.hotelNames.map(async element => {   
            const hotelName: string = await element.getAttribute('title');
            if(hotelName == hotel){ element.click() }
        })
        await browser.pause(2000)
        await this.hotelDetailGrid.waitForDisplayed()
    }

    public async getHotelsPaginationCount() {
        await this.paginationCount.waitForDisplayed()
        const cnt = (await this.paginationCount.getText()).split(" ")[5]
    }

    public async getWayFinderInfo() {
        await this.wayFinderInfo.waitForDisplayed()
        const text = await this.wayFinderInfo.getText()
    }

    public async validateWayFinderInfo() {
        const dest = (await this.wayFinderInfo.getText()).split('|')[0]
        expect(dest).toEqual(wayFinderData.destination)

        const checkInDate = (await this.wayFinderCheckInDate.getText())
        expect(checkInDate).toEqual(wayFinderData.checkIn)

        const checkOutDate = (await this.wayFinderCheckOutDate.getText())
        expect(checkOutDate).toEqual(wayFinderData.checkOut)

        await this.wayFinderGuest.waitForDisplayed()
        const guests = await this.wayFinderGuest.getText()
        expect(guests.split(',')[1]).toEqual(wayFinderData.guests)
    }
    
    public getWayFinderData(): IHotelInfo {
        return wayFinderData;
    }

}
export default new HotelResultsPage();