var bigInt = require("big-integer");

/*
  
    next=ax+c%m

    int qarray[12];
    qarray[0]=0;
    qarray[1]=1;
    int i =2;
    int reset = m;
    while (m % a >0) {
      int remainder=m%a;
      int quotient=m/a;
      std::cout << m << " = " << quotient << "*" << a << " + " << remainder << "\n";
      qarray[i] =qarray[i-2]-(qarray[i-1]*quotient);
      m=a;
      a=remainder;
      i++;
    }
    if (qarray[i-1]<0) {qarray[i-1]+=reset;}
    std::cout << qarray[i-1] << "\n";

*/

function ainverse(){
  var a = bigInt("1bk7am76uy5hcxq16fcqkwxmr",35);
  var m = bigInt("zzzzzzzzzzzzzzzzzzzzzzzzz",35);
  
  var qarray = [];
  qarray[0]= bigInt(0);
  qarray[1] = bigInt(1);
  var i = 2;
  var reset = m;
  
  while(bigInt(m).mod(a).greater(0)){
    var remainder = bigInt(m).divmod(a).remainder;
    var quotient = bigInt(m).divmod(a).quotient;
    //out
    qarray[i] = bigInt(qarray[i-2]).minus(bigInt(qarray[i-1]).multiply(quotient));
    m=a;
    a=remainder;
    i++;
  }
  if(bigInt(qarray[i-1]).compare(0)<0){
    qarray[i-1] = bigInt(qarray[i-1]).plus(reset);
  }
  console.log(qarray[i-1].toString(35));
  
}

ainverse();
