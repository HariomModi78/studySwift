let first = document.querySelector(".first");
let second  = document.querySelector(".second");
let input = document.querySelector(".input")
let output = document.querySelector(".output");

let start = document.querySelector(".start");

start.addEventListener("click",function(){
    if(input.value!=""){
    if(first.value == second.value){
        output.innerText = `${input.value} ${second.value}` ;
    }
    else if(first.value=="cgpa" && second.value =="percentage"){
        if(input.value<=10){
        output.innerText = `${input.value*9.5} ${second.value}` ;
        }else{
            output.innerText = "Invalid Input"
        }
    }
    else if(first.value=="percentage" && second.value =="cgpa"){
        if(input.value<=95){
        output.innerText = `${(input.value/9.5).toFixed(2)} ${second.value}` ;
        }else{
            output.innerText = "Invalid Input"
        }
    }
    else if(first.value=="percentage" && second.value =="gpa"){
        if(input.value<=95){
        output.innerText = `${(((input.value/9.5)/10)*4).toFixed(2)} ${second.value}` ;
        }else{
            output.innerText = "Invalid Input"
        }
    }
    else if(first.value=="cgpa" && second.value =="gpa"){
        if(input.value<=10){
        output.innerText = `${((input.value/10)*4).toFixed(2)} ${second.value}` ;
        }else{
            output.innerText = "Invalid Input"
        }
    }
    else if(first.value=="gpa" && second.value =="cgpa"){
        if(input.value<=4){
        output.innerText = `${((input.value*10)/4).toFixed(2)} ${second.value}` ;
        }else{
            output.innerText = "Invalid Input"
        }
    }
    else if(first.value=="gpa" && second.value =="percentage"){
        if(input.value<=4){
        output.innerText = `${(((input.value*10)/4)*9.5).toFixed(2)} ${second.value}` ;
        }else{
            output.innerText = "Invalid Input"
        }
    }
}    
})