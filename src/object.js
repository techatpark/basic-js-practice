function person(name, age, gender) {
    (this.name = name), (this.age = age), (this.gender = gender);
}

const ifFrozen = input => Object.isFrozen(input);

module.exports = { person, ifFrozen };
