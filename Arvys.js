let students = [];

//this is the function to add students to the empty students array
function addStudent(name,matricNumber, level, department) {
    let student = {
        name: name,
        matricNumber: matricNumber,
        level: level,
        department: department
    };
    students.push(student);
}

// this is the function to display all the students

function displayStudents() {
    for (let student of students) {
        console.log("Name: " + student.name);
        console.log("Matric Number: " + student.matricNumber);
        console.log("Level: " + student.level);
        console.log("Department: " + student.department);
    }
}

// this is the function used to remove the last student

function removeLastStudent() {
    if (students.length > 0) {
        students.pop();
    }else {
        console.log("No students to remove.");
    }   
}

addStudent("Alice", "UNI2043AT", 300, "Computer Science");
addStudent("Bob", "UNI2678OJ", 300, "Mathematics");
addStudent("Charlie", "UNI2391CB", 300, "Physics"   );  

console.log("List of all the student added:");
displayStudents();
removeLastStudent();
console.log("After removing the last student:");
displayStudents();
