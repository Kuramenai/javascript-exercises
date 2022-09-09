const sumAll = function(startNumber,endNumber) {
    let sum = 0;
    if( typeof(startNumber) === 'number' && typeof(endNumber) ==='number'){
    
        if((startNumber >= 0) && (endNumber >= 0)){

            if(startNumber <= endNumber){

                for(let i= startNumber ; i<=endNumber;i++){
                    sum+=i;
                }
                return sum;
        
            }
            else if(startNumber >= endNumber){
        
                for(let i= startNumber ; i>=endNumber;i--){
                    sum+=i;
                }
                return sum;
        
            }
        }
        else{
            return 'ERROR'
        }

    }
    else{
        return 'ERROR'
    }
  
    
};

// Do not edit below this line
module.exports = sumAll;
