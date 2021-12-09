const people=[
    {firstName: "rajeswari", age: 27, position: "webdeveloper"},
    {firstName: "ramu", age: 28, position: "singer"},
    {firstName: "rajesh", age: 30, position: "doctor"}
]
//map

// 27,28,30

// const ages= people.map(function(person){
    // console.log(person);
    // return person.age;
// });
// console.log(ages);
// 
// let positions= people.map(function(designation){
    // return designation.position;
// })
// 
// console.log(positions);
// 
// const firstName= people.map(function(names){
    //  return names.firstName;
// })
// 
// console.log(firstName);



const newPeopleArray = people.map(function(person){
    console.log({
        firstName: person.firstName,
        oldAge: person.age,
    });
    return {
        firstName: person.firstName,
        oldAge: person.age,  
    };
    
});

console.log(newPeopleArray);

// const newArray = people.map(function(person){
    // console.log({
        // hero: person.firstName,
        // oldAge: person.age,
        // job: person.position,
    // });
// 
    // return {
        // hero: person.firstName,
        // oldAge: person.age,
        // job: person.position,
    // };
// 
// });
// 
// console.log(newArray);


