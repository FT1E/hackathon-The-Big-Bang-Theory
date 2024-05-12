
// this is the only file being imported in html
// it determines which ad to show on which ad-space




// randomizing which ad to be shown
// our ads
let our_ads = ['boy', 'girl', 'bird'];

let scripts = { 'bird' : {}, 
                'boy' : {},
                'girl' : {},
            };


// importing modules
import * as bird from './bird.js';
scripts.bird = bird;
import * as boy from './boy.js';
scripts.boy = boy;
import * as girl from './girl.js';
scripts.girl = girl;

deleteCookie('girl');
deleteCookie('boy');



for(let i=1; i<=3; i++){
    let container = document.getElementById(`div${i}`);
    
    if(container === null){
        console.log(`container null`)
        continue;
    }
        
    if(Math.random() < 0.7){
        // our ad
        

        
        // get one of our ads
        let our = our_ads[rand(0, 2)];

        


        console.log(`chose ad ${our} on container ${i}`);
        
        if(our=='boy' && i==2){
            scripts[our].boy.style.transform = "scaleX(-1)";
        }else if(our=='girl' && i==1){
            scripts[our].girl.style.transform = "scaleX(-1)";
        }

        if(our=='boy' && getCookie('boy') || our=='girl' && getCookie('girl')){
            i--;
            continue;
        }


        // set container
        // scripts[our].container = container;

        // set ad cookies
        scripts[our].setCookie();
        // call start after 2 sec delay (give boy, girl ads time to both set their cookies)
        setTimeout(()=> scripts[our].start(container), 2000);
        



    }else{
        // boring ad
        let ad = document.createElement('img');
        ad.style.width = '100%';
        ad.style.height = '100%';
        ad.src = './media/boringAd.png';
        ad.href = '#';
        container.append(ad);
    }
}


function rand(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min );
}



function setCookie(name, val, days){

    let exp_date = new Date();
    exp_date.setTime(exp_date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${val}; expires=${exp_date.toUTCString()}; path=/`;
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const c_decoded = decodeURIComponent(document.cookie);
    const cookies = c_decoded.split('; ');

    let result = null;

    cookies.forEach((element) =>{
        if(element.startsWith(name) && element[name.length] == '='){
            result = element.slice(name.length + 1);
        }
    });

    return result;
}