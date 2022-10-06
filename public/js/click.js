// const button = document.querySelector('button');

// button.addEventListener('click', event => {

//     console.log(event.detail);

// });


const btn1 = document.getElementById('r')
const btn2 = document.getElementById('l')
const left = document.getElementById('l')




btn1.addEventListener("click", () => {
    console.log("clické")
    if(getComputedStyle(left).display != "none"){
        left.style.display = "none";        
    } else {
        left.style.display = "block";
    }
})
btn2.addEventListener("click", () => {
    console.log("clické")
    if(getComputedStyle(left).display != "none"){
        left.style.display = "none";        
    } else {
        left.style.display = "block";
    }
})