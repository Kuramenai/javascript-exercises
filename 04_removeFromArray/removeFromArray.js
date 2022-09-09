const removeFromArray = function(array,...elementsToRemove) {
   
for(let j = 0; j < elementsToRemove.length ; j++){
        for(let i = 0; i< array.length;  i++){

            if(array[i] === elementsToRemove[j]){
                array.splice(i,1);
                break;
            }
        }
       
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
