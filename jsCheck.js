/***********Take1***************/
function createNewPerson(name){
	var obj = {};
	obj.name = name;
	obj.greeting = function(){
		var line = "Hi "+ obj.name;
		return line;
	}
	return obj;
}

var deep = new createNewPerson("Deep");
//console.log(deep.name);
//console.log(deep.greeting());
/***********Take2***************/

function Person1(name){
	this.name = name;
	this.greeting = function(){
		return "Hi "+this.name;
	}
}
var teacher1 = new Person1("DeepVishal");
//console.log(teacher1.name);
//console.log(teacher1.greeting());
/***************Final*******************/
function Person(fName,lName,age,gender,interests){
	this.name = {
		firstName:fName,
		lastName:lName
	};
	this.age = age;
	if(gender == "m"){
		this.gender = "Male";
		this.prefix = "He";
	}else if (gender =="f"){
		this.gender = "Female";
		this.prefix = "She";
	}else{
		this.gender = "Male/Female";
		this.prefix = "He/She";
	}
	this.interests ="";
	for( var i = 0; i<interests.length;i++){
		this.interests +=' ' + interests[i];
	}
	this.bio = function(){
		return this.name.firstName + ' ' + this.name.lastName + ' is ' + this.age + ' years old. ' + this.prefix+ ' likes' + this.interests+ '.' 
	};
	this.greetings = function(){
		return "Hi! my name is "+ this.name.firstName+" "+this.name.lastName;
	};
}

var p1 = new Person("Deep","Vishal",26,"m",["Music","Coding"]);
var p2 = new Person("Jyoti","Jaiswal",23,"f",["Music1","Coding1"]);
var p3 = new Person("Abc","Def",24,"a",["Music3","Coding3"]);
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};
console.dir(p1);
console.log(p1.bio());
console.log(p1.greetings());
console.log(p2.bio());
console.log(p2.greetings());
console.log(p3.bio());
console.log(p3.greetings());