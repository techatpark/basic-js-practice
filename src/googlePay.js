class Customer {
    constructor(name) {
        this.name = name;
        this.googlepay = null;
    }
    send_money(amount, to) {
        this.googlepay.transaction(amount, this, to);
    }
    receive_money(amount, from) {
        console.log(`payment of ${amount} from ${from} to ${this.name} is succesful`);
    }
}

class GooglePay {
    constructor() {
        this.customer_base = [];
    }
    register_customer(customer_class) {
        this.customer_base.push(customer_class);
        customer_class.googlepay = this;
    }
    transaction(amount, from, to) {
        this.customer_base.filter(cust => {
            if (cust.name === to) {
                cust.receive_money(amount, from.name);
            }
        });
    }
}

export { GooglePay, Customer };
