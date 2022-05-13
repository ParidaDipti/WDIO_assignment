import hotelDetails from "../dsl/hotelDetails";
import hotelPage from "../pom/hotel.page";
import hotelDetailsPage from "../pom/hotelDetails.page";
import hotelResultsPage from "../pom/hotelResults.page";
var tags = require('mocha-tags');

describe("vacation direct tests", () => {
    tags('sanity').describe("verify search hotels", () => {
        it('@smoke @regression @citi - verify search hotels with mandatory fields', async () => {
            await hotelPage.open()
            await hotelDetails.searchHotels()
        })

        it('@regression @citi - verify the hotel count on the search results', async () =>{
            await hotelResultsPage.getHotelsPaginationCount()
        })
    })
    describe("verify search results info", () => {
        it('@smoke @citi - verify the Wayfinder Info matches with the search criteria', async () =>{
            await hotelDetails.validateWayFinderInfo()
        })

        it('@regression @citi - Verify results present on the page have same search location', async () => {
            await hotelResultsPage.getHotelAddress()
        })
    })
    describe("verify sorting and filter", () => {
        it('@smoke - verify hotel results after applying star rating filter', async () => {
            await hotelDetails.sortByStarRating('asc')
            await hotelDetails.sortByStarRating('desc')
        })

        it('@regression - verify hotel results after applying hotel name filter', async () => {
            await hotelDetails.sortByHotelName('desc')
            await hotelDetails.sortByHotelName('asc')
        })
    })
    describe('Hotel details verification', () => {
        it('@smoke @citi - verify hotel name and star rating of the selected hotel on hotel details page', async () => {
            await hotelDetails.validateSelectedHotelName()
            await hotelDetailsPage.verifyStartRating()
        })

        it('@regression verify room availability of selected hotel', async() => {
            await hotelDetails.validateSelectedHotelName()
            await hotelDetailsPage.verifyRoomAvailable()
        })
    })
})

