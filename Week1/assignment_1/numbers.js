//triangleArea(base, height): Return the area of a 
var numberMod = {};
var numberMod.triangleArea = function(base,height){
    return 0.5*base*height;
}
//perimeterOfTriangle(side1, side2, side3); Return the perimeter of the triangle given 3 sides
var numberMod.perimeterOfTriangle = function(side1, side2, side3){
    return side1+side2+side3 ;
}
//areaOfSquare(side); Return the area of a square given the length of one side
var numberMod.areaOfSquare = function(side){
  return Math.pow(side,2);
}
//perimeterOfSquare(side); Return the perimeter of a square given one square.
var numberMod.perimeterOfSquare = function(side){
  return 4*side;
}
//areaOfCube(side); Return the area of a cube, given one side
var numberMod.areaOfCube = function(side){
  return 6*Math.pow(side,2);
}
//surfaceAreaOfCube(side); Return the surface area of a cube, given one side.
var numberMod.surfaceAreaOfCube = function(side){
  return 6*Math.pow(side,2);
}
//perimeterOfCube(side): Return the permiter of a cube, given one side
var numberMod.perimeterOfCube = function(side){
  return side*12;
}
//circumferenceOfCircle(radius): Return the circumference of a circle given a radius
var numberMod.circumferenceOfCircle = function(radius){
  return Math.PI*radius;
}
//areaOfCircle(radius): Return the area of a circle given the radius.
var numberMod.areaOfCircle = function(radius){
  return Math.PI*Math.pow(radius,2);
}
// We then set this to be our export
module.exports = numberMod;