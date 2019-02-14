function SimpleAdding(num) { 
    var finalNum = 0;
    for (let i = num; i > 0; i--) {
        finalNum += i;
    }    

    return finalNum;
}
     
  // keep this function call here 
  SimpleAdding(readline());                            
  