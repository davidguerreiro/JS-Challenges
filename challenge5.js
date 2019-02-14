function LetterCapitalize(str) { 
    let arr = str.split(" ");
    for( let i = 0; i < arr.length; i++ ) {
        let tempArray = arr[i].split("");

        tempArray[0] = tempArray[0].toUpperCase();
        arr[i] = tempArray.join("");
    }
    
    return arr.join(" ");
}
     
  // keep this function call here 
  LetterCapitalize(readline());  