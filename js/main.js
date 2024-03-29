let canvas;
let ctx;
let drawer;
let navDrawer;
let contentMain;
let drawerSwitch=false;
let girlImgSrc = new Image();
let girlPos = {
    x: 0,
    y: 0
}

let animIndex = 0;

let timer = 0;

let tempIndex = 0;
let direction = "left";
let anims = [
    "balancing", "hips", "skip", "slide", "snap"
];

window.onload = function() {

    contentMain = document.getElementById("content");
    drawer = document.querySelector(".drawer");
    navDrawer = document.querySelector(".nav-drawer");
    
    canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    girlImgSrc.src = `assets/${anims[animIndex]}.png`;
    console.log(girlImgSrc);
    
    setInterval(function() {
        tempIndex = (tempIndex+1) % 7;

        timer++;

        if(timer%5 === 0) {
            animIndex=(animIndex+1)%anims.length;
            girlImgSrc.src = `assets/${anims[animIndex]}.png`;
        }
        
    }, 500);

    drawerMechanics();

    
}

function closeNavDrawer() {
    navDrawer.classList.remove("open");
    drawerSwitch=false;
}


function drawerMechanics() {
    drawer.addEventListener("click", () => {
        drawerSwitch= !drawerSwitch;
        if(drawerSwitch) {

            navDrawer.classList.add("open");

        } else {
            navDrawer.classList.remove("open");
        }
    });
}


function updateAll() {
    moveGirl();
}


function drawAll() {
    requestAnimationFrame(drawAll, 500);
    updateAll();


    ctx.clearRect(0,0, canvas.width, canvas.height);

    animateSprite(girlImgSrc, girlPos.x,girlPos.y, 39, 53, 1, 1, tempIndex);
    
}

drawAll();


function moveGirl() {
    

    if(direction =="right") {

        girlPos.x = Math.min(girlPos.x + 0.4, canvas.width-40);
    }

    if(direction =="left") {

        girlPos.x = Math.max(girlPos.x - 0.4, 0);
    }

    if(Math.floor(girlPos.x)==0) direction="right";
    if(Math.floor(girlPos.x)==canvas.width-40) direction="left";
    
}

