class Hotel {
    constructor(hotelName, hotelAddress) {
        this.hotelName = hotelName;
        this.hotelAddress = hotelAddress;
        this.agent = null;
        this.customerStaying = [];
    }

    customerAssigned(customerName) {
        this.customerStaying.push(customerName);
        console.log(this.customerStaying);
    }
}

class Oyo {
    constructor() {
        if (Oyo.instance) {
            return Oyo.instance;
        }
        Oyo.instance = this;
        this.registeredHotels = [];
        this.signUpCustomers = [];
    }

    registerMyHotel(hotel) {
        this.registeredHotels.push(hotel);
        hotel.agent = this;
        console.log(`${hotel.hotelName} is registered`);
        return this;
    }

    signUp(customer_class) {
        this.signUpCustomers.push(customer_class);
        customer_class.hotelBooked = this;
        console.log(`${customer_class.name} is registered`);
        return this;
    }

    bookHotel(hotelName, customerName, panNo) {
        this.registeredHotels.forEach(hotel => {
            if (hotel.hotelName === hotelName) {
                hotel.customerAssigned(customerName);
                this.signUpCustomers.forEach(customer => {
                    if (customer.name === customerName && customer.panNo === panNo) {
                        customer.receiveMessage(hotelName);
                    }
                });
            } else {
                console.log('this hotel is not registered with us');
            }
        });
    }
}

class Customer {
    constructor(name, age, panNo) {
        this.name = name;
        this.age = age;
        this.panNo = panNo;
        this.hotelBooked = null;
    }
    receiveMessage(hotelName) {
        console.log(`congratulations ${this.name} your booking with ${hotelName} is successfull`);
    }
}

export { Customer, Oyo, Hotel };
