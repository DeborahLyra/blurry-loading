const bg = document.querySelector(".bg");
const text = document.querySelector(".text");

let load = 0;
let blurry = 100;

let interval = setInterval(blurring, 40);

function blurring () {
    load++
    blurry--

    if (load >= 100) {
        clearInterval(interval)
    }
   text.innerHTML = `${load}%`;
   text.style.opacity = blurry/100;
    bg.style.filter = `blur(${blurry * 0.3}px)`
}