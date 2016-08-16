var bigInt = require("big-integer");



function count(){
  var to = 1000;
  var number = bigInt("0",64);
  
  for(var i=0;i<to;i++){
    number = bigInt(number).plus(1);
    console.log(number.toString(35));
  }
}

count();
