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
export { PersonClass, Professor };
