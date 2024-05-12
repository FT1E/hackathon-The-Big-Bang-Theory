


// const container = document.getElementById("animationContainer");

let position = 10;
let dir = 1;
let velocity = 0.05;

const snailGif = document.createElement("img");
snailGif.id = "snailGif";
snailGif.src = "media/snail.gif";

snailGif.style.width = "80px";
snailGif.style.height = "80px";
snailGif.style.position = "relative";
let can_pull = false;



const ad_iframe = document.createElement("iframe");
ad_iframe.src = "https://www.sephora.com";

ad_iframe.style.opacity = '0';

let c_width;
// let c_height = Number.parseInt(ad_iframe.height = "100px")
ad_iframe.style.width = "0%";
// ad_iframe.style.marginLeft = "0";


export function start(container){


    c_width = Number.parseInt(container.offsetWidth);

    
    container.append(snailGif);
    container.append(ad_iframe);
        
    const intervalRight = setInterval(moveSnailRight, 30);

}

function moveSnailRight(){
        
    position += (dir * velocity);

    
    
    // Update snailGif's left position using percentage
    snailGif.style.left = `${position}%`;
    
    // console.log(`snail moving, pos ${position}px`)
    
    if(can_pull){

        ad_iframe.style.width = `${position * c_width / 100 - snailGif.offsetWidth }px`;

        console.log(`setting iframe width ${position * c_width / 100} px`);
        if(position >= 90){
            clearInterval(intervalRight);
            container.removeChild(snailGif);
            ad_iframe.style.width = "100%";
        }
    }
    
    
    
    // Reverse direction if the snail reaches the edges
    if (position >= 95 || position <= 0) {
        dir *= -1;
        snailGif.style.transform = `scaleX(${dir})`;
    }
}

snailGif.onmouseover = () => {

    snailGif.onmouseover = "";

    velocity = 0.2;
    if(dir == 1) {
        dir = -1;
        snailGif.style.transform = `scaleX(${dir})`;
    }
    
    const interv = setInterval(() => {
        if(position <= 2){
            ad_iframe.style.opacity = '1';
            can_pull = true;
            clearInterval(interv);
        }
    }, 30); 
};


export function setCookie(){
    
}