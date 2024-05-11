// AD WITH BIRD



// container is the container in which the ad is to be shown, i.e. the ad-space
let container = document.getElementById('dating1');
    
let c_height = Number.parseInt(container.offsetHeight);
let c_width= Number.parseInt(container.offsetWidth);


console.log(c_height);
console.log(c_width);


// bird moving around el
let bird = document.createElement("img");
bird.src = "./media/hummingbird.gif";
bird.style.position = "relative";
bird.style.height = "50px";
bird.style.width = "50px";


// ad iframe
let ad_iframe = document.createElement("iframe");
ad_iframe.src = "https://www.bird.co";       //  ad iframe link
ad_iframe.style.width = "100%";
ad_iframe.style.height = "0px";
ad_iframe.style.opacity = '0';

const bot_bound = 85;

// variables for moving the bird

// position in %
let [x_pos, y_pos] = [ 20 , 60];  

// direction
let [x_dir, y_dir] = [1, -1];
// x  ==> left (-1) & right (1)
// y ==> up (-1) & bottom (1)

 // velocity - how many units it moves
let [x_vel, y_vel] = [0.5, 0.3];      


let can_pull = false;   // when true the ad is pulled down


let interval = setInterval(() => {
    
    if((x_pos * c_width / 100) >= (c_width - Number.parseInt(bird.style.width)) || x_pos <= 0){
        x_dir *= -1;
        bird.style.transform = `scaleX(${x_dir})`;
    }
    if(y_pos >= bot_bound || y_pos <=0){
        y_dir *= -1;
    }
    
    
    if(can_pull){

        
        ad_iframe.style.height = `${ Math.trunc(y_pos / 100 * c_height)}px`;
        
        
        // console.log(`pulling y_pos = ${ad_iframe.style.height} `)
        
        
        if(y_pos >= bot_bound){
            ad_iframe.style.height = '80%';
            clearInterval(interval);
            container.removeChild(bird);
        }
    }
    

    x_pos += (x_dir * x_vel);
    y_pos += (y_dir * y_vel);
    
    
    bird.style.left = `${x_pos * c_width / 100}px`;
    bird.style.top = `${y_pos * c_height / 100}px`;
    

}, 60);


bird.onmouseover = () => {
    bird.onmouseover = "";    // happens only once

    // make sure it goes up when hovered over
    if(y_dir == 1){
        y_dir = -1;
    }
    
    // so it goes up in a more steep and faster direction
    y_vel = 1;
    
    const interv = setInterval(() => {
        if(y_pos <= 5){
            can_pull = true;
            clearInterval(interv);
            y_vel = 1.5;
            ad_iframe.style.opacity = '1';
            if(y_dir == -1){
                y_dir = 1;
            }
        }
    }, 100)
    
};



container.append(bird);
container.append(ad_iframe);


