// let a=10
// const b=20
// var c=40

let a=300
if (true){
    let a=10
    const b=20
    //console.log("inner" ,a);
    

}


//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username="aditi"
    function two(){
        const websit="youtube"
        console.log(username);
    }
   // console.log(website);
   // two()
}

//one()

if(true){
    const username="aditi"
    if(username==="aditi"){
        const website="youtube"
       // console.log(username+website);
    }
    //console.log(website);
}

//console.log(username);

//***********interesting */

function addone(num){
    return num+1
}
addone(5)

const addTwo =function(num){
    return num+2
}
addTwo(5)