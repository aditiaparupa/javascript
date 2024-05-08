function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,5000));
const user={
    username:"aditi",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject
handleObject({
    username:"aditi",
    price:399
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([34,24,57]));