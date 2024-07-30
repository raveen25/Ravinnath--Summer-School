class Job {
  constructor(title, description, salary) {
    this.title = title;
    this.description = description;
    this.salary = salary;
  }

  logJobDescription() {
    console.log(
      "Job title: " + this.title + " Job Description: " + "this.description",
    );
  }
}
const job = new Job("Software Developer", "Develops software");
job.logJobDescription();

module.exports = Job;
