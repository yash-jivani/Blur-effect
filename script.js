
let counter = document.querySelector('.count');
// console.log(counter)
let img = document.querySelector('img');
// console.log(img)

let int = setInterval(blurring,30)
let blurValue = 17;
let opacityValue = 1;
let load = 1;

function blurring(){
    
    load++;
    if(load<=100){
        img.style.filter = `blur(${blurCalcu()}px)`
        counter.innerText = `${load}%`;
        counter.style.opacity = `${opacityCalcu()}`
    }

}

function blurCalcu(){
    blurValue -= 0.17
    return blurValue
}

function opacityCalcu(){
    opacityValue -= 0.01
    return opacityValue
}




























