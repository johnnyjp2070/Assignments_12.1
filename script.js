
function counterReducer(actionType, counter) {
    if(actionType === "INC"){
        counter = counter + 1;
    } else if (actionType === "DEC"){
        counter = counter -  1;
    }
    return counter;
}

var result = counterReducer('DEC', 5);
console.log("Decremented: Resultant value is "+ result);

var result = counterReducer('INC', 99);
console.log("Incremented: Resultant value is "+ result);
