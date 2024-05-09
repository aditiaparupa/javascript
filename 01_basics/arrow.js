const user={
    username:"aditi",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`)
       // console.log(this);
    }

}
// user.welcomemessage()
// user.username="ruchi"
// user.welcomemessage()
//console.log(this);

// function chai(){
//     let username="aditi"
//     console.log(this.username);
// }
// chai()

// const chai=function(){
//     let username="aditi"
//     console.log(this.username);
// }

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(4,5))
//const addTwo=(num1,num2)=> num1+num2
const addTwo=(num1,num2)=> ({username:"aditi"})

console.log(addTwo(4,5))

const myArray=[2,4,6,8,9]
myArray.forEach()