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
    constructor(name, age, id, gender) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.gender = gender;
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
    addSubscribers(...channels) {
        this.subscribers.push(...channels);
        return this;
    }
    unsubscribe(channel) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === channel) {
                this.subscribers.splice(i, 1);
            }
        }
    }
    transmit(news) {
        this.subscribers.forEach(subscriber => subscriber.receive(news));
    }
}

class Channel {
    constructor(name) {
        this.name = name;
    }
    receive(news) {
        console.log(`${this.name}: ${news} `);
    }
}
export { PersonClass, Professor, SingletonPersonClass, Manager, Employee, EmployeeBuilder, Channel, NewsAgency };
