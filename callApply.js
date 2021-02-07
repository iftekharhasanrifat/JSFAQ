// if use apply then pass arguments as array
// if use call then pass argument with comma
const normalPerson={
    firstName: "Iftekhar",
    lastName : "Hasan",
    salary :15000,
    getFullName: function(){
        console.log(this.firstName,' ',this.lastName);;
    },
    chargeBill:function(amount,tips,tax){
        console.log(this);
        this.salary = this.salary-amount-tips-tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Hero",
    lastName:"baalam",
    salary:25000
}
const friendlyPerson = {
    firstName: "Hero",
    lastName:"kalam",
    salary:25000
}

// normalPerson.chargeBill.call(friendlyPerson,5000,500,100);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson,900,100,10);
// normalPerson.chargeBill.call(heroPerson,1600,10,10);
// console.log(heroPerson.salary);

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(2000);
// console.log(heroPerson.salary);
// // console.log(heroChargeBill);

// const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonChargeBill(5000);
// console.log(friendlyPerson.salary);



// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[300,30,10]);
console.log(heroPerson.salary);