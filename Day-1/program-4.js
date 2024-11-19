var Student = {
    fullName : "Aman",
    age : 24,
    x : null,
    y : undefined,
    z : true,
    a : BigInt("1234"),
    z : Symbol,
    fun : function Person(name){
        this.name = name;
        // console.log(this.name);
    }
}

// Person.prototype.greet = function(){
//     console.log("Hello," + this.name)
// }
console.log(typeof Student.x);
// console.log(Student.fun.Person("Aman"));