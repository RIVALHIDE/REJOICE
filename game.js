var timer = 60;
var score = 0;
var hitrn = 0;

function getNewhit() {
    hitrn = Math.floor(((Math.random() * 10)));
    document.querySelector("#hit").textContent = hitrn;
}


function addScore() {
    score += 10;
    document.querySelector("#score").textContent = score;

}


//makes a bubble
function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 176; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${rn}</div>`;
    }
    document.querySelector('.pbtm').innerHTML = clutter;
}


//target score

document.querySelector(".pbtm").addEventListener("click", function (dets) {
    var clickednum = (Number(dets.target.textContent));
    if (clickednum == hitrn) {
        addScore();
        makeBubble();
        getNewhit();
    }
});

//timer
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = "";
            document.querySelector("#hit").textContent = 0;
            document.querySelector(".pbtm").innerHTML = `GAME OVER!!! `;
            // document.querySelector(".pbtm").style.fontSize = "3vw";


        }
    }, 1000);

}
// runTimer();
getNewhit();
makeBubble();

let pop = document.querySelector("#pop-up-div");
let game1 = document.querySelector("#yes")
let game2 = document.querySelector("#no")

gsap.from(pop,{
    scale:0,
    opacity:1,
    duration:1.25,
})

function gameplay1(){
    let choice1 = game1.getAttribute("id");

    if(choice1 === "yes"){
        pop.style.opacity=0;
        runTimer();
    }
}

function gameplay2(){
    let choice2 = game2.getAttribute("id");
    if(choice2 === "no"){
        pop.style.opacity=0;
        document.querySelector(".panel").style.display="none";
    }
}
