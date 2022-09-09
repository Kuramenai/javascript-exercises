const repeatString = function(string,num) {
    stringToReturn = string;
    if (num >=1){
        for(let i = 0; i<num-1; i++){
            stringToReturn += string;
        }
        return stringToReturn;
    }
    else if(num < 0){
        return 'ERROR';
    }
    else{
        return '';
    }
    
};

// Do not edit below this line
module.exports = repeatString;
