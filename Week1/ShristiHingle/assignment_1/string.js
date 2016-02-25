//string.js
//=========

// In this script we will do the following operations
// 1.occurrencesOfSubstring(main, substr); 
// Count and return how many times a substring occurs in a main string; 
// this function is case sensitive
// 2.occurrencesOfSubstringInsensivie(main, substr); 
// Count and return how many times a substring occurs in a main string; 
// this function is case insensitive
// 3.randomizeSentences(paragraph); Given a string representing a paragraph, 
// reorder the sentences. Return a new string representing a paragraph where the sentences are randomly ordered.

//creating an object for modules
var strModule ={};
strModule.occurrencesOfSubstring = function(main, substr) {
    if(typeof main != 'string' || main == null){
        throw "error not a string";
    }
    if(typeof substr != 'string' || substr == null){
        throw "error not a string";
    }
    if(main.length < substr.length)
    {
        throw "length of substr greater that main string";
    }
    var n = 0,
        pos = 0,
        step =substr.length;

    while (true) {
        pos = main.indexOf(substr, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
  return "Occurence of Sub string "+substr+" in String "+main+" is = "+n;
}

strModule.occurrencesOfSubstringInsensitive = function(main, substr) {
    if(typeof main != 'string' || main == null){
        throw "error not a string"
    }
    if(typeof substr != 'string' || substr == null){
        throw "error not a string"
    } 
        if(main.length < substr.length)
    {
        throw "length of substr greater that main string";
    }  
      main1 = main.toUpperCase();
      substr1 = substr.toUpperCase();
        var n = 0,
            pos = 0,
            step =substr1.length;

        while (true) {
            pos = main1.indexOf(substr1, pos);
            if (pos >= 0) {
                ++n;
                pos += step;
            } else break;
    }
  return "Occurence of Sub string "+substr+" in String "+main+" is = "+n;
}
strModule.randomizeSentences = function(paragraph){
    if(typeof paragraph != 'string' || paragraph == null){
        throw "error not a string"
    }
    var sentences = paragraph.match( /[^\.!\?]+[\.!\?]+/g );
    var index = 0;
    var i=0;
    var lengthOfSentence = sentences.length;
    var newSentence = [];
    while(lengthOfSentence>=1)
    {
        index = Math.floor(Math.random() * (lengthOfSentence - 1));
        newSentence[i++]=sentences[index];
        sentences.splice(index, 1);
        lengthOfSentence = sentences.length
    }
    for( var newString in newSentence)
        console.log(newSentence[newString]);
       
}
module.exports = strModule; 