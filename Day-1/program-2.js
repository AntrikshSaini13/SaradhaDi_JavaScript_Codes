// Object created here

const student = {
    name : "Aman",
    age : 25,
    cgpa : 8.5,
    isPass : true
}
console.log(student);
typeof student;

console.log(student.age);
console.log(student.name);
console.log(student.cgpa);
console.log(student.isPass);

console.log(student["age"]);
console.log(student["name"]);
console.log(student["cgpa"]);
console.log(student["isPass"]);

console.log(student['age']);
console.log(student['name']);
console.log(student['isPass']);
console.log(student['cgpa']);

student["name"] = "Rahul Sharma";
console.log(student)
console.log(typeof student);
console.log(typeof student["name"]);