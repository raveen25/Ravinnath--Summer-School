const Job = require("./Job.js");
const person = require("./Person.js");

let Student = new person("John", "Smith", 51, "Janitor", false);
let anotherStudent = new person("Brian", "fob", 32, "driver , true");

Student.introduce();
anotherStudent.introduce();
