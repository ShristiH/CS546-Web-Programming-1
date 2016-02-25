var datesMod = {};

//daysUntil(someDate): Return the number of days between the current date and someDate.
datesMod.daysUntil = function(someDate){
try{
  var current = new Date(someDate);
  return parseInt((someDate - Date.now())/(24*3600*1000));
  }catch(e){
  throw "error";
  }
};
//daysLeftInYear(): Return the number of days left in the year
datesMod.daysLeftInYear = function(){
  var newYears = new Date("December 31, 2016");
  return datesMod.daysUntil(newYears);
}
//daysSince(someDate): Return the number of days that have passed since someDate.
datesMod.daysSince = function(someDate){
  try{
  var current = new Date(someDate);
  return parseInt((Date.now() - someDate)/(24*3600*1000));
  }catch(e){
    throw "error";
  };
  
}
//nextFridayTheThirteenth(): Return the next date that is both a Friday and the 13th.
datesMod.nextFridayTheThirteenth = function(){
  var date = new Date();
  date.setDate(13);
  while(true)
  {
   if (date.getDay() == 5) {
    break;
   }; 
   date.setMonth(date.getMonth() + 1);
  }
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  return " "+monthNames[date.getMonth()]+ " "+date.getFullYear();
}
module.exports = datesMod;