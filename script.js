function counterReducer(actionType, counter) {
    if(actionType === "INC"){
        counter += 1;
    } else if (actionType === "DEC"){
        counter -= 1;
    }
    return counter;
}

var result = counterReducer('DEC', 5);
console.log(result);