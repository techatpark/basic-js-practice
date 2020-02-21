import { Oyo, Hotel, Customer } from '../src/typeSystem';

test('Working with type system', () => {
    let oyoRooms = new Oyo();
    let karthick = new Customer('karthick', 22, 'DMPUKJ213');
    let ravi = new Customer('Ravi', 34, 'DNMJSHD123');
    let sathishHotels = new Hotel('Sathish Hotels', '12/23, Neethi Nagar, Y. Othakkadai, MDU');

    // registering a hotel to the Oyo and signing up for customers,
    oyoRooms.registerMyHotel(sathishHotels);
    oyoRooms.signUp(karthick).signUp(ravi);

    // Booking a room in hotel
    oyoRooms.bookHotel('Sathish Hotels', 'karthick', 'DMPUKJ213');
});
