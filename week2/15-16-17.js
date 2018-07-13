/*15. Write some code to test two arrays for equality using == and ===.Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;*/
console.log("They will return false.");
//To solve this problem we should covert them into strings;
//16.
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o1.foo = "yes";
console.log(o1);
console.log(o2);
console.log(o3);
console.log("No changes")

o2.foo = "no";
console.log(o2);
console.log(o3);
console.log("o3 changed")

//Does the order that you assign(o3 = o2 or o2 = o3) matter ?
console.log("Yes, of course, o3 now is exactly the same object as o2,02 was defined first");
//17. What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;

console.log(typeof typeof bar);
console.log("It is always a string");
