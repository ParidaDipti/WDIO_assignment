import hotelPage from "../pom/hotel.page";
import hotelDetailsPage from "../pom/hotelDetails.page";
import hotelResultsPage from "../pom/hotelResults.page";

class HotelDetails {
    public async searchHotels() {
        const data = hotelPage.getHotelInfo()
        await hotelPage.enterDestination(data.destination)
        await hotelPage.enterCheckInDate(data.checkIn)
        await hotelPage.enterCheckOutDate(data.checkOut)
        await hotelPage.clickSearch()
    }

    public async sortByStarRating(order: string) {
        await hotelResultsPage.clickStarRatingFilter()
        await hotelResultsPage.getSortOrder(order)
    }
    
    public async sortByHotelName(order: string) {
        await hotelResultsPage.clickHotelNameFilter()
        await hotelResultsPage.getSortOrder(order)
    }

    public async validateWayFinderInfo(){
        await hotelResultsPage.getWayFinderInfo()
        await hotelResultsPage.validateWayFinderInfo()
    }

    public async validateSelectedHotelName() {
        const hotel = hotelDetailsPage.selectHotelName()
        await hotelResultsPage.selectHotelName(hotel.hotelName)
        await hotelDetailsPage.verifyHotelName(hotel.hotelName)
    }

}
export default new HotelDetails()
