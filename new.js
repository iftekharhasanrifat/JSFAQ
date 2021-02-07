class Person{
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary =salary;
    }
}

const heroPerson = new Person('Iftekhar','Hasan',15000);
console.log(heroPerson);

function oldPerson(firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary=salary;
}
const personOld = new Person('Abu','Taher',1500);
console.log(personOld); 
