let text_options = ['Great', 'amazing', 'insane'];
function printHere(){
    let text_papa = document.getElementById("papa").textContent;
    if(text_papa =="Yay"){
    document.getElementById("papa").textContent = "Bye";
    }
    else
    {
        document.getElementById("papa").textContent = "Yay";   
    }
}
const colors = ['red', 'blue', 'yellow'];
let index = 0;
function switchColor(){

document.getElementById('mama').style.backgroundColor=colors[index];
index++;
if(index===3)
{
    index=0;
}

}


function test(){
    setInterval(switchColor, 500);
}
