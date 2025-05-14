const socket = io();
let input = document.querySelector(".translatorInput");
let button = document.querySelector(".button");
let output = document.querySelector(".translatorOutput");
let second  = document.querySelector(".second");

button.addEventListener("click",function(){
    if(input.value.trim()!=""){
    socket.emit("translate",input.value,second.value);
    output.innerText = "loading..."
    }
    
})
window.addEventListener("keypress",function(e){
    
    if(e.key=="Enter" && input.value.trim()!=""){
    socket.emit("translate",input.value,second.value);
    output.innerText = "loading..."
    }
    
})
socket.on("data",function(ans){
    output.innerText = ans;
})
