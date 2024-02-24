/*const numbers = [2,3,4,6, 10, 15, 20, 33];

numbers.push(5);
numbers.pop();
console.log(numbers);

//Arrow functions and callbacks
const answer = numbers.filter((number)=>{
    return number>10
});
console.log(answer);*/

//const info = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
//Fetching API
const info = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
            .then((response)=>
            console.log(response.json())
            )

const promise_ = new Promise((resolve,reject)=>{
    const error = true;
    if(!error){
        resolve("Hello");
    }
    else{
        reject("Bye");
    }}
);

console.log(promise_)
promise_.then ((value)=>{
    console.log(value);
}).catch(err=>console.log(err))
