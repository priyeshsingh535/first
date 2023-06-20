// Hoisting is a phenomena in which we can access the variabla and functions before initialize it.
// getName();
// console.log(x);
// console.log(getName);
 var x=7;
 
 

function a()              //  it behaves just like a function
{
    console.log("Hello");
}
function c()              //  it behaves just like a function
{
    console.log("Hello");
}
a();
c();
console.log(x);

// var getName=()=>{                //it behaves as a variable 
//     console.log("hello");
// }
// getName();
// console.log(x);
// console.log(getName);

