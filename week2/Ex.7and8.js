//7. Make a list of vehicles
var vehicles = ["motorbike", "caravan", "bike", "car"];
//8. How do you get the third element from that list?
console.log(vehicles[2]);
//9. Change the function vehicle to use the 
//list of question 7. So that vehicle("green", 3, 1) 
//prints "a green new bike".
function vehicle(color, code, age) {
   if (age > 2) {
       console.log("a " + color + " " + vehicles[code - 1]);
   } else 
       console.log("a " + color + " new" + " " + vehicles[code - 1]);
   };
/*10.Use the list of vehicles to write an advertisement. 
So that it prints something like:
"Amazing Joe's Garage, we service cars, motorbikes, 
caravans and bikes."*/
function advertisment (vehicles) {
   let advertisment = "Amazing Joe's Garage, we service ";
   let firstVehicles = "vehicles.slice(0, vehicles.length - 1);
   let lastVehicle = vehicles[vehicles.length - 1];
      if (vehicles.length === 1) {
         return advertisment + vehicles[0];
      } else {
         return advertisment + firstVehicles.join(',') + " and " + lastVehicle;
      }
}
            
    console.log(advertisment(vehicles));

/*11. What if you add one more vehicle to the list, can you 
have that added to the advertisement without changing the 
 code for question 10 ?*/   
 vehicleLs.push("scooter", "train", "skateboard");
advertisment(vehicles);
