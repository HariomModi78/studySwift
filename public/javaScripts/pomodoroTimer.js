let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let pomodoroTimer = document.querySelector(".pomodoroTimer");
let longBreak = document.querySelector(".longBreak");
let sortBreak = document.querySelector(".sortBreak");
let timeInterval;

localStorage.setItem("time",25);
localStorage.setItem("second","00");
pomodoroTimer.classList.add("select");
if(localStorage.getItem("time")){
    if((localStorage.getItem("time")).length!=2){
        minute.innerText = `0${localStorage.getItem("time")}` ;
    }else{
        minute.innerText = localStorage.getItem("time");
    }
        second.innerText = localStorage.getItem("second");
}


pomodoroTimer.addEventListener("click",function(){
    sortBreak.classList.remove("select");
    longBreak.classList.remove("select");
    pomodoroTimer.classList.add("select");
    localStorage.setItem("time",25);
    if((localStorage.getItem("time")).length!=2){
        minute.innerText = `0${localStorage.getItem("time")}` ;
    }else{
        minute.innerText = localStorage.getItem("time");
    }
    
})
sortBreak.addEventListener("click",function(){
    pomodoroTimer.classList.remove("select");
    longBreak.classList.remove("select");
    sortBreak.classList.add("select");
    localStorage.setItem("time",2);
    if((localStorage.getItem("time")).length!=2){
        minute.innerText = `0${localStorage.getItem("time")}` ;
    }else{
        minute.innerText = localStorage.getItem("time");
    }


})
longBreak.addEventListener("click",function(){
    sortBreak.classList.remove("select");
    pomodoroTimer.classList.remove("select");
    longBreak.classList.add("select");
    localStorage.setItem("time",15);
    if((localStorage.getItem("time")).length!=2){
        minute.innerText = `0${localStorage.getItem("time")}` ;
    }else{
        minute.innerText = localStorage.getItem("time");
    }
})

function timeStart(){
    let i=localStorage.getItem("time");
    let count=localStorage.getItem("second");
    if(count==0){
        i--;
        count=59;
    }
    timeInterval = setInterval(function(){
        if((i).toString().length ==2){
        minute.innerText = i;
        }else{
        minute.innerText = `0${i}`
        }
        if((count).toString().length ==2){
        second.innerText = count;
        }else{
            second.innerText = `0${count}`
        }
        if(count==0){
            i--;
            count=59
        }
        
        count--;
        if(i==-1){
            clearInterval(timeInterval);
            let audio = new Audio("/audio/alarm.wav");
            audio.play();
            start.innerText = "Start";
            start.style.cssText = "background-color:rgb(10,150,20)";
            if(localStorage.getItem("time").length ==2){
            minute.innerText = localStorage.getItem("time");
            }else{
            minute.innerText = `0${localStorage.getItem("time")}`
            }
        }
    },1000)
}


let start = document.querySelector(".start");
start.addEventListener("click",function(){
    start.style.cssText = "display:none"
    timeStart();
})

