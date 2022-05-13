import { hotelInfoData } from "../data/hotel_test_data";
import { IHotelInfo } from "../dsl/models/hotel-info";
import Page from "./page";

class HotelPage extends Page {
    /**
     * define selectors using getter methods
     */
    get hotelTab () {
        return $('#search-hotel-button')
    }

    get destination() {
        return $('#inputDestination')
    }

    get checkInDate() {
        return $('#inputCheckInDate')
    }

    get checkOutDate() {
        return $('#inputCheckOutDate')
    }

    get guests() {
        return $('#passengerQtyLabel_Hotel')
    }

    get searchBtn() {
        return $('[data-search="Hotel"]')
    }

    get searchResultsHeading() {
        return $('.js-wayfinder-heading')
    }

    get hotelResultsContainer() {
        return $('.js-results-container.hotel-results-container')
    }

    public open () {
        return super.open('#Hotel')
    }

    public async enterDestination(destination: string) {
        await this.destination.waitForDisplayed()
        await this.destination.addValue(destination)
    }

    public async enterCheckInDate(date: string) {
        await this.checkInDate.waitForDisplayed()
        await this.checkInDate.click()
        await $(`#jd-${date}`).waitForClickable()
        await $(`#jd-${date}`).click();
    }

    public async enterCheckOutDate(date: string) {
        await this.checkOutDate.waitForDisplayed()
        await this.checkOutDate.click()
        await $(`#jd-${date}`).waitForClickable()
        await $(`#jd-${date}`).click();
    }

    public async clickSearch() {
        await this.searchBtn.isEnabled()
        await this.searchBtn.click()
        await this.searchResultsHeading.waitForDisplayed()
        await this.hotelResultsContainer.waitForDisplayed()
    } 

    public getHotelInfo(): IHotelInfo {
        return hotelInfoData
    }

}

export default new HotelPage(); 