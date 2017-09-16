var a = 1377005400000; //2013-07-20 15:30
var b = 1377783900000; //2013-07-29 15:45

var dateA = new Date(a);
var dateB = new Date(b);

var dayRelativeDifference =   dateB.getHours()*60 + dateB.getMinutes()
                            - dateA.getHours()*60 - dateA.getMinutes();
//  dayRelativeDifference will be 15

var absoluteDifference    = (b-a)/60

console.log(dayRelativeDifference);
console.log(dateA);
