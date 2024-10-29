function multiply(number){
    //multiply by 5
    //raise to the power of how many digits are present
    
    return number * Math.pow(5, Math.abs(number).toString().length) 
  }
  
  
  console.log( multiply(55) )
  console.log( multiply(-3) )
  console.log( multiply(200) )