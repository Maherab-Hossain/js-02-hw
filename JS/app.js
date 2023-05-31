

// PROJECT A
// UP BUTTON STARTS

let upbtn = document.querySelector(`.up`);
let output = document.querySelector(`.output`);

function upResult() {
    let upNewValue = Number(output.value);
    upNewValue = upNewValue + 1;
    output.value = upNewValue;

}

upbtn.addEventListener(`click`, upResult);

// UP BUTTON ENDS

// // DOWN BUTTON STARTS


let downbtn = document.querySelector(`.down`)


function downResult() {
    let downNewValue =Number(output.value);

    if (downNewValue == 0) {
        return false
    }

    downNewValue = downNewValue - 1;
    output.value = downNewValue;
}

downbtn.addEventListener(`click`, downResult);


// // DOWN BUTTON ENDS



// PROJECT B
// RANGE SLIDER STARTS

let slider = document.querySelector(`.range`);
let resultA = document.querySelector(`.rangeSlider .output h3 span`);


function price() {
    let usernewValue =Number (slider.value);
    
    resultA.innerHTML = usernewValue 
    
    
}

slider.addEventListener(`input`,price);

// RANGE SLIDER ENDS



// PROJECT C
// RANDOM COLOR CHANGER STARTS


let moodbtn = document.querySelector(`.mood`)
let body = document.querySelector(`body`)


function magic() {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    body.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`
 
}


moodbtn.addEventListener(`click`, magic);


// RANDOM COLOR CHANGER ENDS


// PROJECT D
// IMG HOVER STARTS


let doorV = document.querySelector(`.door`);
let front = document.querySelector(`.show`);
let back = document.querySelector(`.hide`);


function frontShow() {
    front.classList.add(`hovered`)
    
}

doorV.addEventListener(`mouseenter`,frontShow )

function backHide() {
    front.classList.remove(`hovered`)
    
}

doorV.addEventListener(`mouseleave`, backHide)

// IMG HOVER ENDS