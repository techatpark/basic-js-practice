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

/*class News {
    constructor(message, topic) {
        this._message = message;
        this._topic = topic;
    }
    get message() {
        return this._message;
    }
    get topic() {
        return this._topic;
    }

    set message(value) {
        this._message = value;
    }

    set topic(value) {
        this._topic = value;
    }
}

class TVChannel {
    constructor(name, type) {
        this._name = name;
        this._type = type;
    }
    get name() {
        return this._name;
    }
    get topic() {
        return this._topic;
    }

    set name(value) {
        this._name = value;
    }

    set topic(value) {
        this._topic = value;
    }
}*/
//subject
class NewsAgency {
    constructor() {
        this.subscribers = [];
    }
    addSubscribers(...channels) {
        this.subscribers.push(...channels);
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
        return `${this.name}: ${news} `;
    }
}
export { PersonClass, Professor, SingletonPersonClass, Manager, Employee, EmployeeBuilder, Channel, NewsAgency };
