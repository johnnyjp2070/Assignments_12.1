function counterReducer(actionType, counter) {
    if(actionType === "INC"){
        counter += 1;
        change = "Incremented"
    } else if (actionType === "DEC"){
        counter -= 1;
        change = "Decremented"
    }
    return counter;
}

var result = counterReducer('DEC', 5);
console.log(change+" - "+result);