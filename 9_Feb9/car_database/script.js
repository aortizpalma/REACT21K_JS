let carList = [];
console.log(carList);
let text = document.querySelector("p");

register = () => {
    let plate = document.getElementById("plate").value;
    let carMaker = document.getElementById("carMaker").value;
    let carModel = document.getElementById("carModel").value;
    let price = Number(document.getElementById("price").value);
    let color = document.getElementById("color").value;
    
    console.log(plate);
    console.log(carMaker);
    console.log(carModel);
    console.log(price);
    console.log(color);
    
    
    
    function Car(plate, maker, model, price, color,discount) {
        this.carPlate = plate;
        this.carMaker = carMaker;    
        this.carModel = carModel;
        this.carPrice = price;
        this.carColor = color;
        // This was a try to include the discount method into the object constructructor
        /*         this.carDiscount = function() {
            if (this.carPrice > 20000) {
                this.discount = "25%";
            } else if (this.carPrice < 5000) {
                this.discount = "10%";
            } else {
                this.discount = "15%";
            }
            return this.discount;
        }  */
    }
    
    let newCar = new Car(plate, carMaker, carModel, price, color);
    console.log(newCar);

    carList.push(newCar);

    text.textContent=`Your car has been registered with the following details: Plate: ${newCar.carPlate}, Car maker: ${newCar.carMaker}, Car Model ${newCar.carModel}, Price: ${newCar.carPrice} , Color: ${newCar.carColor}, Discount: ${newCar.carDiscount}`;

    console.table(carList);

// Here is another try at the the dicount calculation code:
/* let discount = "";

    Car.carDiscount = function() {
        if (Car.carPrice > 20000) {
            discount = "25%";
        } else if (Car.carPrice < 5000) {
            discount = "10%";
        } else {
            discount = "15%";
        }
        return discount;
    }
    console.log(discount); */

}
search = () => {
    let plate = document.getElementById("plate").value;
    let carMaker = document.getElementById("carMaker").value;
    let carModel = document.getElementById("carModel").value;
    let price = Number(document.getElementById("price").value);
    let color = document.getElementById("color").value;
    
    console.log(plate);
    
    searchPlate = () => {
        if (carLlist[0]==plate) {
            console.log("plate found");
        } else {
            console.log("PLATE NOT FOUND");
        }
    }

    console.log(searchPlate(plate));

}



/* Code if the discount code is to be included in a separate section

discount = () => {
    let price = Number(document.getElementById("price").value);
    
    console.log(price);
    
let discount = "";

    Car.carDiscount = function() {
        if (Car.carPrice > 20000) {
            discount = "25%";
        } else if (this.carPrice < 5000) {
            discount = "10%";
        } else {
            discount = "15%";
        }
        return discount;
    }



    text.textContent=`Here are the details of the car you searched: Plate: ${newCar.carPlate}, Car maker: ${newCar.carMaker}, Car Model ${newCar.carModel}, Price: ${newCar.price} , Color: ${newCar.color}`;

    console.table(carList);
} */