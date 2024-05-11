

let container = document.getElementById('dating1');
let c_height = container.style.height;
let c_width= container.style.width;




let bird = document.createElement("img");
bird.src = "./media/hummingbird.gif";
bird.style.position = "relative";
bird.style.height = "50px";
bird.style.width = "50px";

let ad_iframe = document.createElement("iframe");
ad_iframe.src = "https://www.bird.co";       //  ad iframe link
ad_iframe.style.width = "50%";
ad_iframe.style.height = "0px";




let [x_pos, y_pos] = [40, 60];  // position in %

let [x_dir, y_dir] = [1, -1];
// x  ==> left (-1) & right (1)
// y ==> up (-1) & bottom (1)


let [x_vel, y_vel] = [2, 2];      // velocity - how many units it moves 


let can_pull = false;   // when true the ad is pulled down


let interval = setInterval(() => {
    
    if(x_pos >= 90 || x_pos <= 0){
        x_dir *= -1;
        bird.style.transform = `scaleX(${x_dir})`;
    }
    if(y_pos >= 90 || y_pos <=0){
        y_dir *= -1;
    }

    x_pos += (x_dir * x_vel);
    y_pos += (y_dir * y_vel);
    
    
    bird.style.left = `${x_pos}%`;
    bird.style.top = `${y_pos}%`;
    
    if(can_pull){

        console.log(`pulling y_pos = ${y_pos} `)

        ad_iframe.style.height = `${y_pos}%`;
        if(y_pos >= 90){
            ad_iframe.style.height = '100%';
        }
    }
    

}, 100);


bird.onmouseover = () => {
    bird.mouseover = "";    // happens only once

    // make sure it goes up when hovered over
    if(y_dir == 1){
        y_dir = -1;
    }
    
    // so it goes up in a more steep and faster direction
    y_vel = 5;
    
    const interv = setInterval(() => {
        if(y_pos <= 0){
            can_pull = true;
            clearInterval(interv);
        }
    }, 100)
    
};



container.append(bird);
container.append(ad_iframe);


