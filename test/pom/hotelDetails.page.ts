import { selectHotel } from "../data/hotel_test_data";
import { ISelectHotel } from "../dsl/models/selectHotel-info";
import Page from "./page";

class HotelDetailsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get hotelDetails() { return $('.hotel-details-grid-container') }
    get hotelName() { return $('.hotel-redesign-detail-header-main h2 span:nth-child(1)') }
    get starRating() { return $('.hotel-redesign-detail-header-main h2 div') }
    get bookThisRoomBtn() { return $('button[data-qaid="Button_BookRoom"]') }
    
    public async getHotelName() {
        await this.hotelDetails.waitForDisplayed()
        const hotelName = await this.hotelName.getText()
        return hotelName;
    }
    public async verifyHotelName(hotelName: string) {
        await this.hotelDetails.waitForDisplayed()
        expect(await this.getHotelName()).toEqual(hotelName)
    }
    public async verifyStartRating() {
        await this.starRating.waitForDisplayed()
        expect(await this.starRating).toBeDisplayed()
    }

    public async verifyRoomAvailable() {
        await this.bookThisRoomBtn.waitForDisplayed()
        expect(await this.bookThisRoomBtn).toBeDisplayed()
    }

    public selectHotelName(): ISelectHotel {
        return selectHotel
    }

}
export default new HotelDetailsPage();