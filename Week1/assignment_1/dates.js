var datesMod = {};
//daysUntil(someDate): Return the number of days between the current date and someDate.
var daysUntil = function(someDate){
  return parseInt((someDate - Date.now())/(24*3600*1000));
}
//daysLeftInYear(): Return the number of days left in the year
var daysLeftInYear = function(){
  var newYears = new Date("December 31, 2017");
  return daysUntil(newYears);
}
//daysSince(someDate): Return the number of days that have passed since someDate.
var daysSince = function(someDate){
  return parseInt((Date.now() - someDate)/(24*3600*1000));
}
//nextFridayTheThirteenth(): Return the next date that is both a Friday and the 13th.
var nextFridayTheThirteenth = function(){
  var date = new Date();
  date.setDate(13);
  while(true)
  {
   if (date.getDay() == 5) {
    break;
   }; 
   date.setMonth(date.getMonth() + 1);
  }

  return " "+date.getMonth()+ " "+date.getFullYear();
}
module.exports = datesMod;
var date = nextFridayTheThirteenth();
console.log(date);