function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    /* this.speak = language => `${this.name} speaks ${language}`;
    this.friend = name => `${this.name} has a friend named ${name}`;*/
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

function PersonBuilder() {
    let name;
    let age;
    let gender;

    return {
        setName: function(name) {
            this.name = name;
            return this;
        },
        setAge: function(age) {
            this.age = age;
            return this;
        },
        setGender: function(gender) {
            this.gender = gender;
            return this;
        },
        Build: function() {
            return new Person(name, age, gender);
        },
    };
}

export { Person, teacher, Scientist, PersonBuilder };
