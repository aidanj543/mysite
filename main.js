const heading1 = document.getElementById("text");
let name=`Website Testing`;

heading1.textContent = `Aidan's ${name}`; 
Get_firstchar(name);
Get_lastchar(name);
Get_numberofchar(name);
Get_Upper(name);
Get_Lower(name);
Get_Capitalize(name);
function Get_firstchar(text){


    console.log(text.substring(0,1));
}

function Get_lastchar(text){

    console.log(text.at(-1));

}

function Get_numberofchar(text){


    
    console.log(text.length);
}

function Get_Upper(text){

    console.log(text.toUpperCase());
}

function Get_Lower(text){

    console.log(text.toLowerCase());
}

function Get_Capitalize(text){

    console.log(text.at(0).toUpperCase()+text.substring(1));
}

// const input_ = document.getElementById("i1")

// const e1 = document.querySelector("Q1")

// input_.addEventListener("keyup" () =>{

//     let value_ = e1.value;

//     e1.textContent = get_lower(value_);
// })