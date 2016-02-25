objectsMod = {};
objectsMod.shallowClone = function(baseObject) {
    if(typeof baseObject != 'object' || baseObject == null){
        throw "error not a object"
    }
    var newObj = {};
    for(var i in baseObject) {
        if(baseObject.hasOwnProperty(i)) {
            newObj[i] = baseObject[i];
        }
    }
    console.log("Shallow clone of array is:");
    return newObj;
}

objectsMod.deepClone = function(baseObject) {
    var newObj = baseObject;
    if (baseObject && typeof baseObject === 'object') {
        newObj = Object.prototype.toString.call(baseObject) === "[object Array]" ? [] : {};
        for (var i in baseObject) {
            newObj[i] = objectsMod.deepClone(baseObject[i]);
        }
    }
    return newObj;
}
module.exports = objectsMod;
