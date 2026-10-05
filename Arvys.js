let studentList = [];

// This function is used to add a student to the student list
function registerStudent(studentName, studentMatric, studentLevel, studentDepartment) {
    let newStudent = {
        name: studentName,
        matricNumber: studentMatric,
        level: studentLevel,
        department: studentDepartment
    };

    studentList.push(newStudent);
}

// This function is used to display all the students
function showStudents() {
    for (let student of studentList) {
        console.log("Name: " + student.name);
        console.log("Matric Number: " + student.matricNumber);
        console.log("Level: " + student.level);
        console.log("Department: " + student.department);
    }
}

// This function is used to remove the last student added
function deleteLastStudent() {
    if (studentList.length > 0) {
        studentList.pop();
    } else {
        console.log("No students to remove.");
    }
}

// Adding students to the system
registerStudent("Daniel", "UNI3156AK", 200, "Computer Science");
registerStudent("Esther", "UNI4289BM", 300, "Mathematics");
registerStudent("Michael", "UNI5732CP", 300, "Physics");

// Display all students
console.log("List of all students added:");
showStudents();

// Remove the last student
deleteLastStudent();

// Display the students after removing the last one
console.log("After removing the last student:");
showStudents();
