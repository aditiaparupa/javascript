// #primitive
//7 types:string,number,boolean,null,undefined,symbol,bigInt
// const score=100
// const isLoggedIn=false
// const outsideTemp=null
// let userEmail;
// const id=symbol('123')
// const anotherId=symbol('123')
// console.log(id ===anotherId);
// const bigNumber=234552746864939n
//reference(non primitive)
//array,objects,functions

const heros=["aditi","riya","siya"];
let obj={
    name:"aditi",
    age:20,
}

const myFunction=function(){
    console.log("hello world");
}
 console.log(typeof myFunction);



 //memory-stack(primitive),heap(non primitive)

//  let myYoutubename="aditi"

//  let anothername=myYoutubename
//  anothername="chai"
//  console.log(anothername);
//  console.log(myYoutubename);

 let user={
    email:"aditi@gmail.com",
    upi:"user@ybl"

 }
 let usertwo=user
  usertwo.email="aditi@google.com"
 console.log(user.email);
 console.log(usertwo.email);
