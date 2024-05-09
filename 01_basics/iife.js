//immediately invoked function expressions(iife)
(function chai(){
    //name iife
    console.log(`db connected`);
})();
    ((name)=>{
        //non name iife
        console.log(`db connected 2 ${name}`);
    })('aditi')
