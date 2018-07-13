/*Create an object and a function that takes the object 
as a parameter and prints out all of its properties and values.*/
var myObj = {
    firstName: "Evgenii",
    lastName: "Frank",
    age: 30
};
function showMyObject (object) {
    let properties = Object.keys(object);
    let values = Object.values(object);
    for (i = 0; i < properties.length; i++) {
        console.log (properties[i] + ": " + values[i]);
    };
showMyObject(myObj);
