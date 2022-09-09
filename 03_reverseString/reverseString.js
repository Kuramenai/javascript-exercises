const reverseString = function(string) {
if(string){
    stringArray = string.split("");
    stringArray.reverse()
    return stringArray.join("");
}
else{
    return '';
}
}

// Do not edit below this line
module.exports = reverseString;
