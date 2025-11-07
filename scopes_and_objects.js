var globalCount = 2;

function localScope() {
    let localCount = 3;
}

function MOD() {
    globalCount += 4;
    let localCount = 5;
}

function STudentfeesmustfall(name, surname, age, course) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.course = course;
}

student1 = dumbstudent("Name", "Age", "Class");
student2 = averagestudent("Name", "Surname", "Course");

const student = {
    name: "Emihle",
    surname: "Dumo",
    age: "24",
    Faculty: {
        Dep: "IT and Robotics",
        course: "coding in robotics"
    }
}
