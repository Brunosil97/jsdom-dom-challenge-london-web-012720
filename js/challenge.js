
const counter = document.getElementById("counter")
const minus_btn = document.getElementById("minus")
const plus_btn = document.getElementById("plus") 
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const list = document.getElementById("list")
const likes = document.getElementsByClassName("likes")[0]

let timer;

const startTimer = () => {
    counter.innerText++;
}

document.addEventListener("DOMContentLoaded",function() {
    timer = window.setInterval(startTimer, 1000);
})

const incrementCount = () => {
    currentCount = parseInt(counter.innerText, 10) + 1; 
    counter.innerText = currentCount;
}

const decreaseCount = () => { 
    currentCount = parseInt(counter.innerText, 10) - 1;
    counter.innerText = currentCount;
}

const heart_like = () => { 
     element = document.createElement("li");
     index = counter.innerText
     element.innerText = `${index} has been liked`
     list.append(element)
}

const disable_buttons = () => { 
    minus_btn.disabled = true; 
    heart.disabled = true; 
    plus_btn.disabled = true;
}

const enable_buttons = () => {
    minus_btn.disabled = false; 
    heart.disabled = false; 
    plus_btn.disabled = false;
}

const pause_button = () => {
    if(timer) {
        clearInterval(timer) // clears the interval. stopping the set interval
        timer = null 
        pause.innerText = "Resume"
        disable_buttons()
    }
    else {
        timer = window.setInterval(startTimer, 1000);
        pause.innerText = "Pause"
        enable_buttons()
    }
   
}

plus_btn.addEventListener("click", incrementCount)
minus_btn.addEventListener("click", decreaseCount)
heart.addEventListener("click", heart_like)
pause.addEventListener("click", pause_button)