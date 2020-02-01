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
let employeesUnderMe = [];
class Manager extends Employee {
    add(...junior) {
        employeesUnderMe.push(...junior);
        return this;
    }
    employees() {
        console.log(employeesUnderMe);
    }
}
export { PersonClass, Professor, SingletonPersonClass, Manager, Employee, employeesUnderMe };
