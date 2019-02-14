function FirstFactorial(num) { 
    for( let i = num; i > 1; i-- ) {
        num *= i - 1;
    }

    return num; 
  }
     
  // keep this function call here 
  FirstFactorial(readline());      