import { IHotelInfo } from "../dsl/models/hotel-info";
import { ISelectHotel } from "../dsl/models/selectHotel-info";

//Hotel info test data
const hotelInfoData: IHotelInfo = {
    destination: 'Pune, India',
    checkIn: '05-16-22',
    checkOut: '05-20-22',
    guests: '2 guests'
}

const wayFinderData: IHotelInfo = {
    destination: 'Pune, IN ',
    checkIn: 'Mon, May 16, 2022',
    checkOut: 'Fri, May 20, 2022',
    guests: ' 2 Adults'
}

const selectHotel: ISelectHotel = {
    hotelName: 'Novotel Pune Viman Nagar Hotel'
}

export { hotelInfoData, wayFinderData, selectHotel };

