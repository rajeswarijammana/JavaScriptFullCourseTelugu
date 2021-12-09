// callback function

function morning(personName){
    return `good morning ${personName}`
}

function greet(firstName,cb){
    const result=`${cb(firstName)}`
    // console.log(firstName);
    // console.log(cb);
    console.log(result);

}

greet("rajeswari", morning)



function Fun1(x,cbf){
    console.log("i am rajeswari");
    console.log(x);
    cbf();
}
function Fun2(){
    console.log("i am venky");
}
Fun1('Good morning',Fun2);
// Fun2();

// setTimeout(Fun2, 2000)














