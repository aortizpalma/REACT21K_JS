let text = document.querySelector("p");

let car = {
    type: "Audi",
    year: 2000,
    ownerName: "Alfonso",
    city: "Helsinki",
/*     calcAge: function() { //This is now a method.
        this.age = 2021-this.year;
        return this.age;
    } */

// This one is sending NaN as a result.
/*     calcAge2: () => {
        this.age = 2021-this.year;
        return this.age;
    } */

    calcAge3:()=>(2021-car.year)

    
}
console.log(car);

console.log(car.year);

console.log(car.city);

car.color = "Red";
console.log(car);

car.color = "Black";
console.log(car);

delete car.city;

console.log(car);

text.textContent=`Your car is ${car.type}, ${car.color}, year ${car.year}. The age of the car is ${car.calcAge3()} years.`;


function Car(type, year, ownerName, city) {
    this.carType = type;
    this.carYear = year;
    this.carOwnerName = ownerName;
    this.carCity = city;
}

let mercedes = new Car("Mercedes", 2020, "Margit", "Helsinki");
console.log(mercedes);
let volvo = new Car("Volvo", 2020, "Margit", "Helsinki");
console.log(volvo);