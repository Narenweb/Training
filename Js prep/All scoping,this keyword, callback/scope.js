var name = ["naren","sara"];
name[0]="changed";
console.log(name);

function get(){
    const name ="hello";
    console.log(name);
}

get();

//Lexical enviroiment - It is hierarchy level or sequence level, child function refers to the parent, parent is refers to the global scope.

//Global scope -  A global variable is accessible from anywhere in the code
//Block scope -  which that variable can access for the particular code block 
//Local scope - which that vaiable can access for the particular function

//local, block, global
function detail(){
    // let b=20; // block scope
    work();
    function work(){
        let b=20; // local scope
        console.log(b);
    }
}

// let b=20; // global scope
detail();

//scope difference
if(true){
    var name = "naren";
}

console.log(name);// Var will gives output because it is function scope

if(true){
    let work = "working";
    // console.log(work); if put like this it will work
}

console.log(work);//But let will throw error because it is block scope


