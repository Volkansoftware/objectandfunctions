//prototypal Inheritance
let Person = function(name,yearOfBirth,job)
{
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}
Person.prototype.calculateAge=function()
{
    return 2021-this.yearOfBirth;
}
let teacher = function(name,yearOfBirth,job,subject)
{
    /*this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;*/
    Person.call(this,name,yearOfBirth,job);
    this.subject=subject;
}
// Inherit the Person prototype methods
teacher.prototype = Object.create(Person.prototype);

//set teacher constructor
teacher.prototype.constructor=teacher;
teacher.prototype.greeting=function()
{
    return `hello my name is ${this.name}`;
}

let emel= new teacher("emel",2000,"teacher","software");


console.log(emel);
console.log(emel.calculateAge());
console.log(emel.greeting());