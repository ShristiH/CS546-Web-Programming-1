var arrayMod = {};
arrayMod.shallowClone = function (baseArr) {
  if(baseArr == null || baseArr.length <= 0){
    throw 'Array cannot be null';
  }else if(! Array.isArray(baseArr)){
    throw 'Input should be an Array';
  }else if(!(baseArr instanceof Array)){
    throw 'Input should be an Array';
  }else{    
    var secondArray = baseArr.slice(0);
    return secondArray;
  }
  };

arrayMod.randomized = function (baseArr){
  
  if(baseArr == null || baseArr.length <= 0){
    throw 'Array cannot be null';
  }else if(! Array.isArray(baseArr)){
    throw 'Input should be an Array';
  }else if(!(baseArr instanceof Array)){
    throw 'Input should be an Array';
  }else{    
    var newArr = baseArr.slice();
    return newArr.sort(function(){
      return 0.5 - Math.random();
    });
  } 
};
module.exports = arrayMod;
