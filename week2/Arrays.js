let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log("The new value of array will be: ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']")
console.log(favoriteAnimals);
console.log("The array has a length of:" favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
var a = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + a);
