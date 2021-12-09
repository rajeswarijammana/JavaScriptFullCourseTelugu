
const people=[
{firstName: "rajeswari", age: 27, position: "webdeveloper"},
{firstName: "raju", age: 30, position: "teacher"},
{firstName: "raghu", age: 40, position: "politician"},
]

console.log(people);

people.forEach(function(item){
    // console.log(item);
    console.log(`my name is ${item.firstName}`);
});

let nums=[42,52,48,57,66,87];
console.log(nums);

nums.forEach(function(n){
    // console.log(n*2);
    // console.log(n/2);
    console.log(n-10);
})

