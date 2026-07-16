const countdown = document.getElementById("countdown");
const content = document.getElementById("content");

let number = 3;


let timer = setInterval(()=>{

    number--;

    countdown.innerHTML = `
        <h1>${number}</h1>
    `;


    if(number === 0){

        clearInterval(timer);

        countdown.style.display="none";

        content.style.display="block";

        startAnimation();

    }


},1000);


document.getElementById("surpriseBtn")
.addEventListener("click",()=>{

    // Confetti Blast
    confetti({

        particleCount:200,

        spread:120,

        origin:{
            y:0.6
        }

    });


});