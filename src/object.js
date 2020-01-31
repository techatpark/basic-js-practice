function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.speak = language => `${this.name} speaks ${language}`;
    this.friend = name => `${this.name} has a friend named ${name}`;
}

function teacher(name, age, gender, subject) {
    Person.call(this, name, age, gender);
    this.subject = subject;
    this.teach = () => `${this.name} teaches ${this.subject}`;
}

class Scientist {
    constructor(name, gender, contribution, dateOfBirth) {
        this.name = name;
        this.gender = gender;
        this.dateOfBirth = new Date(dateOfBirth);
        this.contribution = contribution;
    }
    achievement() {
        return `${this.name} has contributed the following:\n ${this.contribution}`;
    }
}

export { Person, teacher, Scientist };
