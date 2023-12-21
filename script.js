//complete this code
class Person {
	constructor(name,age){
		this.name = name,
		this.age = age
	}
	get (){
		return this.name;
	}
	set (aged){
		this.aged = age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	tech(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
