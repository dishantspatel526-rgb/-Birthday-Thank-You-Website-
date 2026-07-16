const countdown = document.getElementById("countdown");
const content = document.getElementById("content");

let number = 3;

let timer = setInterval(() => {

    countdown.innerHTML = `
        <h1>${number}</h1>
    `;

    number--;

    if(number < 0){

        clearInterval(timer);

        countdown.style.display = "none";

        content.style.display = "block";

    }

},1000);


// Gift Box

const gift = document.getElementById("giftBox");
const cake = document.getElementById("cakeBox");
const finalMsg = document.getElementById("finalMessage");


if(gift){

gift.addEventListener("click",()=>{

    gift.style.display="none";

    cake.style.display="block";

    finalMsg.style.display="block";


    if(typeof confetti !== "undefined"){

        confetti({
            particleCount:200,
            spread:150
        });

    }

});

}


// Surprise Button

const btn = document.getElementById("surpriseBtn");


if(btn){

btn.addEventListener("click",()=>{


    if(typeof confetti !== "undefined"){

        confetti({
            particleCount:200,
            spread:120,
            origin:{
                y:0.6
            }
        });

    }

});

}