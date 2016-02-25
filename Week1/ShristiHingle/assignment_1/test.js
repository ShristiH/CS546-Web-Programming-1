var strModule = require("./string.js"),
    numberModule = require("./numbers.js"),
    objectModule = require("./objects.js"),
    arrayModule = require("./arrays.js"),
    dateModule = require("./dates.js");

console.log("All modules have loaded!");
//-----------------------String module testing----------------------------------
console.log("String Module:");
console.log("--------------------------------------------------------");
console.log("1. occurrencesOfSubstring");
var stringTest1 = strModule.occurrencesOfSubstring("I love Web Programming", "LOVE"); //Count and return how many times a substring occurs in a main string; this function is case sensitive
console.log(stringTest1);
console.log("2. occurrencesOfSubstringInsensitive");
var stringTest2 = strModule.occurrencesOfSubstringInsensitive("I love Web Programming", "LOVE"); //Count and return how many times a substring occurs in a main string; this function is case insensitive
console.log(stringTest2);
console.log("3. randomizeSentences");
var stringTest3 = strModule.randomizeSentences("Hello, world! My name is Phil. This is a wonderful day because the snow did not delay me. The class was very sad that class was still, right? Of course they were."); //Given a string representing a paragraph, reorder the sentences. Return a new string representing a paragraph where the sentences are randomly ordered. A paragraph is just a string that contains punctuation in it. So the following string is a paragraph
//------------------------Number Module Test-------------------------------------
console.log("Number Module");
console.log("---------------------------------------------------------");
console.log("1. Area of the triangle "+numberModule.triangleArea(2, 2)); //Return the area of a triangle
console.log("2. perimeter of the triangle "+numberModule.perimeterOfTriangle(1, 2, 3)); //Return the perimeter of the triangle given 3 sides
console.log("3. Area of square is " +numberModule.areaOfSquare(2)); //Return the area of a square given the length of one side
console.log("4. perimeter of square is " +numberModule.perimeterOfSquare(2)); //Return the perimeter of a square given one square.
console.log("5. volume of cube "+numberModule.areaOfCube(2)); //Return the volume of a cube, given one side; sidenote: this should have been called volume when I wrote this; this is a perfect example of "Flow" in terms of User Experience study. I was in the flow!
console.log("6. surface are of cube is "+numberModule.surfaceAreaOfCube(2)); //Return the surface area of a cube, given one side.
console.log("7. perimeter of cube "+numberModule.perimeterOfCube(2)); //Return the perimeter of a cube, given one side
console.log("8. circumference of circle " +numberModule.circumferenceOfCircle(2)); //Return the circumference of a circle given a radius
console.log("9. area of circle " +numberModule.areaOfCircle(2)); //Return the area of a circle given the radius.
//------------------------Object module testing----------------------------------
console.log("Object Module:");
console.log("---------------------------------------------------------");
var x = {a:'a', b:{c:'c', d:'d'}, e:{f:{g:'g'}}};
console.log("1. Shallow Clone of ");
console.log(objectModule.shallowClone(x)); //Return a 'shallow clone' of the baseObject A shallow clone is one where objects inside of the baseobject are just copied (think: copying 1 layer deep) rather than cloned
console.log("2. Deep Clone of ");
console.log(objectModule.deepClone(x)); //Return a 'deep clone' of the baseObject.
//-------------------------Dates module testing-----------------------------------
console.log("Dates Module");
console.log("---------------------------------------------------------");
var date = new Date("Feb 28, 2016");
console.log("1. Days until "+ date +" are "+ dateModule.daysUntil(date)); //Return the number of days between the current date and someDate.
console.log("2. Days left in the year "+dateModule.daysLeftInYear());// Return the number of days left in the year
var oldDate = new Date("Feb 8, 2016"); 
console.log("3. Days since "+oldDate +" are "+dateModule.daysSince(oldDate)); //Return the number of days that have passed since someDate.
console.log("4. next friday the 13th will be in "+dateModule.nextFridayTheThirteenth());// Return the next date that is both a Friday and the 13th.
//-------------------------Array module testing-----------------------------------
console.log("Array Module");
console.log("---------------------------------------------------------");
console.log("1. Shallow clone of array "+arrayModule.shallowClone([1,2,3,4,5,6,7,8,9])); //Given a base array, return a shallow copy of that array.
console.log("2. Randomized base array "+arrayModule.randomized([3,6,7,8])); //Given a base array, return a shallow copy of the array and return the elements in a randomized order
