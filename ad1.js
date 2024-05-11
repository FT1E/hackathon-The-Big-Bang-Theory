// AD WITH BIRD



// container is the container in which the ad is to be shown, i.e. the ad-space
let container = document.getElementById('test');    
let c_height = Number.parseInt(container.style.height = "500px");
let c_width= Number.parseInt(container.style.width = "33%");


// console.log(c_height);
// console.log(c_width);


// bird moving around el
let bird = document.createElement("img");
bird.src = "./media/hummingbird.gif";
bird.style.position = "absolute";
bird.style.height = "50px";
bird.style.width = "50px";


// ad iframe
let ad_iframe = document.createElement("iframe");
ad_iframe.src = "https://www.bird.co";       //  ad iframe link
ad_iframe.style.width = "100%";
ad_iframe.style.height = "0px";



// variables for moving the bird

// position in %
let [x_pos, y_pos] = [ 20 , 60];  

// direction
let [x_dir, y_dir] = [1, -1];
// x  ==> left (-1) & right (1)
// y ==> up (-1) & bottom (1)

 // velocity - how many units it moves
let [x_vel, y_vel] = [0.5, 1];      


let can_pull = false;   // when true the ad is pulled down


let interval = setInterval(() => {
    
    if(x_pos >= c_width - 4 || x_pos <= 0){
        x_dir *= -1;
        bird.style.transform = `scaleX(${x_dir})`;
    }
    if(y_pos >= 90 || y_pos <=0){
        y_dir *= -1;
    }
    
    
    if(can_pull){

        
        ad_iframe.style.height = `${ Math.trunc(y_pos / 100 * c_height) + Number.parseInt(bird.style.height)}px`;
        
        
        console.log(`pulling y_pos = ${ad_iframe.style.height} `)
        
        
        if(y_pos >= 90){
            ad_iframe.style.height = '100%';
            clearInterval(interval);
        }
    }
    

    x_pos += (x_dir * x_vel);
    y_pos += (y_dir * y_vel);
    
    
    bird.style.left = `${x_pos}%`;
    bird.style.top = `${y_pos}%`;
    

}, 50);


bird.onmouseover = () => {
    bird.onmouseover = "";    // happens only once

    // make sure it goes up when hovered over
    if(y_dir == 1){
        y_dir = -1;
    }
    
    // so it goes up in a more steep and faster direction
    y_vel = 2;
    
    const interv = setInterval(() => {
        if(y_pos <= 5){
            can_pull = true;
            clearInterval(interv);
            y_vel = 1.5;
        }
    }, 100)
    
};



container.append(bird);
container.append(ad_iframe);


