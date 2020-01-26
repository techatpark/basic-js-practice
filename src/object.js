function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.speak = language => `${this.name} speaks ${language}`;
    this.friend = name => `${this.name} has a friend named ${name}`;
}

export { Person };
