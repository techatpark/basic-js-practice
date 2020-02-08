class PersonClass {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    speak(language) {
        return `${this.name} speaks ${language}`;
    }
    friend(name) {
        return `${this.name} has a friend named ${name}`;
    }
}

class Professor extends PersonClass {
    teach(subject) {
        return `${this.name} teaches ${subject}`;
    }
}

class SingletonPersonClass {
    constructor(name, age, gender) {
        if (SingletonPersonClass.instance) {
            return SingletonPersonClass.instance;
        }
        SingletonPersonClass.instance = this;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    speak(language) {
        return `${this.name} speaks ${language}`;
    }
    friend(name) {
        return `${this.name} has a friend named ${name}`;
    }
}

class Employee {
    constructor(name, age, id, gender, salary_month) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.gender = gender;
        this.salary = salary_month;
    }
    GetSalary() {
        return this.salary;
    }
    SetSalary(newSalary) {
        this.salary = newSalary;
    }
    accept(visitorfunction) {
        visitorfunction(this);
    }
}

function taxOnEmployees(employee) {
    //tax exemption for those earning below 30k
    if (employee.GetSalary() < 30000) {
        return employee.SetSalary(employee.GetSalary());
    } else if (employee.GetSalary() < 50000) {
        return employee.SetSalary(employee.GetSalary() * 0.8);
    } else {
        return employee.SetSalary(employee.GetSalary() * 0.6);
    }
}

class Manager extends Employee {
    constructor(name, age, id, gender) {
        super(name, age, id, gender);
        this.employeesUnderMe = [];
    }
    add(...junior) {
        this.employeesUnderMe.push(...junior);
        return this;
    }
    employees() {
        return this.employeesUnderMe;
    }
}

class EmployeeBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setGender(gender) {
        this.gender = gender;
        return this;
    }
    build() {
        return new Employee(this.name, this.age, this.id, this.gender);
    }
}
class NewsAgency {
    constructor() {
        this.subscribers = [];
    }
    addSubscribers(channel, type) {
        this.subscribers.push(channel, type);
        return this;
    }
    unsubscribe(channel) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === channel) {
                this.subscribers.splice(i, 1);
            }
        }
    }
    transmit(news, newstype) {
        this.subscribers.forEach(subscriber => {
            if (subscriber.type === newstype) {
                subscriber.receive(news);
            }
        });
    }
}

class Channel {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    receive(news) {
        console.log(`${this.name}: ${news} `);
    }
}

//Mediator pattern, so here we are going to learn about mediator pattern
//here we will try to build google pay pay and receive button
class Customer {
    constructor(name) {
        this.name = name;
    }
    /*send(amount, to) {
        new GooglePay().send(amount, this, to);
    }
    receive(amount, from) {
        console.log(`Payment of ${amount} from ${from} to ${this.name} is succesful`);
    }*/
}
//adding a comment

class GooglePay {
    constructor() {
        this.customerBase = [];
    }
    register(name) {
        this.customerBase.push(name);
        return this;
    }
    send(amount, from, to) {
        if (this.customerBase.filter(cust => cust === from)) {
            if (this.customerBase.filter(cust => cust === to)) {
                this.receive(amount, from);
            } else {
                console.log('This customer does not exist');
            }
        } else {
            console.log('invalid sender,registering to start payment');
            this.register(from);
            console.log('you are registered trying to initiate payment');
            if (this.customerBase.filter(cust => cust === from)) {
                if (this.customerBase.filter(cust => cust === to)) {
                    this.receive(amount, from);
                } else {
                    console.log('Sorry registration not succesful');
                }
            }
        }
    }
    receive(amount, from) {
        console.log(`Payment of Rs.${amount} from ${from} is succesful`);
    }
}
//visitor method
//eg that we take here is taxing brackets

export {
    PersonClass,
    Professor,
    SingletonPersonClass,
    Manager,
    Employee,
    EmployeeBuilder,
    Channel,
    NewsAgency,
    GooglePay,
    Customer,
    taxOnEmployees,
};
