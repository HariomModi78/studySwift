let card = document.querySelector(".cardBox");
let i=0;
for(let j=0;j<5;j++){
    let interval = setInterval(function(){
        card.scrollBy({
        left: screen.width-19,
        behavior: 'smooth'
        });
        if(i==2){
            card.scrollBy({
        right: card.width,
        behavior: 'smooth'
        });
        }
        i++;
    },10000)
}
    
let pomodoroTimer = document.querySelector(".pomodoroTimer");
let cgpaConvertion = document.querySelector(".cgpaConvertion");
let motivation = document.querySelector(".motivation");
let translator = document.querySelector(".translator");

pomodoroTimer.addEventListener("click",function(){
    window.location.href = "/pomodoroTimer"
})
cgpaConvertion.addEventListener("click",function(){
    window.location.href = "/cgpaConversion"
})
motivation.addEventListener("click",function(){
    window.location.href = "/motivation"
})
translator.addEventListener("click",function(){
    window.location.href = "/translator"
})