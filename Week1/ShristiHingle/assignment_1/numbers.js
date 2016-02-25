//triangleArea(base, height): Return the area of a 
var numberMod = {};
numberMod.triangleArea = function(base,height){
  if(typeof base != 'number' || base <= 0){
    throw 'Error';
  }
   if(typeof height != 'number' || height <= 0){
    throw 'Error';
  }
    return 0.5*base*height;
  }

//console.log(triangleArea('a',2));
//perimeterOfTriangle(side1, side2, side3); Return the perimeter of the triangle given 3 sides
numberMod.perimeterOfTriangle = function(side1, side2, side3){
  if(typeof side1 != 'number' || side1 <= 0){
    throw 'Error';
  }
  if(typeof side2 != 'number' || side2 <= 0){
    throw 'Error';
  }
  if(typeof side3 != 'number' || side3 <= 0){
    throw 'Error';
  }
  return side1+side2+side3 ;
}
//areaOfSquare(side); Return the area of a square given the length of one side
numberMod.areaOfSquare = function(side){
  if(typeof side != 'number' || side <= 0){
    throw 'Error';
  }
  return Math.pow(side,2);
}
//perimeterOfSquare(side); Return the perimeter of a square given one square.
numberMod.perimeterOfSquare = function(side){
  if(typeof side != 'number' || side <= 0){
    throw 'Error';
  }
  return 4*side;
}
//areaOfCube(side); Return the area of a cube, given one side
numberMod.areaOfCube = function(side){
  if(typeof side != 'number' || side <= 0){
    throw 'Error';
  }
  return 6*Math.pow(side,2);
}
//surfaceAreaOfCube(side); Return the surface area of a cube, given one side.
numberMod.surfaceAreaOfCube = function(side){
  if(typeof side != 'number' || side <= 0){
    throw 'Error';
  }
  return 6*Math.pow(side,2);
}
//perimeterOfCube(side): Return the permiter of a cube, given one side
numberMod.perimeterOfCube = function(side){
  if(typeof side != 'number' || side <= 0){
    throw 'Error';
  }
  return side*12;
}
//circumferenceOfCircle(radius): Return the circumference of a circle given a radius
numberMod.circumferenceOfCircle = function(radius){
  if(typeof radius != 'number' || radius <= 0){
    throw 'Error';
  }
  return Math.PI*radius;
}
//areaOfCircle(radius): Return the area of a circle given the radius.
numberMod.areaOfCircle = function(radius){
  if(typeof radius != 'number' || radius <= 0){
    throw 'Error';
  }
  return Math.PI*Math.pow(radius,2);
}
// We then set this to be our export
module.exports = numberMod;