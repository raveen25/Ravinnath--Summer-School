class Person {
  constructor(name, surname, age, job, isSleeping) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.job = job;
    this.isSleeping = isSleeping;
  }
  sleeping() {
    return (this.isSleeping = true);
  }
  calcAge() {
    return 2024 - this.age;
  }
  introduce() {
    console.log(` my name is ${this.name}`);
  }
}

module.exports = Person;
new Person("Raveen", "Rajah", 20, "Test", false).introduce();
