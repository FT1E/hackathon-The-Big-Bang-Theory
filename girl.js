// the file importing the module needs to set container with ID


// export let container; 

export const girl = document.createElement('img');
girl.style.width = "100%";
girl.style.position = 'absolute';

const heart = document.createElement('img');
heart.style.position = 'absolute';
heart.style.left = girl.style.left;
// heart.style.left = `${Number.parseInt(heart.style.width)}px`;



let ad_iframe = document.createElement('iframe');
ad_iframe.src = 'https://tinder.com';
ad_iframe.style.opacity = '0';
ad_iframe.style.zIndex = '2';
ad_iframe.style.width = '100%';
ad_iframe.style.height = '100%';
ad_iframe.style.position = 'relative';



heart.style.zIndex = '2';
heart.style.position = 'absolute';
heart.src = './media/blueheart.png';
heart.onmouseover = () =>{
    heart.onmouseover = "";
    
    let scale = 100;
    
    const interval = setInterval(() => {
        
        heart.style.transform = `scale(${scale / 100})`;
        if(scale++ >= 200){
            clearInterval(interval);
            
            let container = girl.parentElement;
            container.removeChild(girl);
            container.removeChild(heart);
            
            container.append(ad_iframe);
            
            
            const interv = setInterval(() => {
                ad_iframe.style.opacity = "" + (+ad_iframe.style.opacity + 0.1);
                if(+ad_iframe.style.opacity >= 1){
                    ad_iframe.style.opacity = '1';
                    clearInterval(interv);
                }
            }, 100)
        }
    }, 20);
}


// setCookie();

// setTimeout(start, 2000);    // give time for other ads to load (in case the boy ad is shown)



export function start(container){
    
    container.style.position = 'relative';
    
    // console.log(`checkBoy() = ${checkBoy()}`);
    
    if(checkBoy()){
        // GIRL WITH BOY
        
        girl.src = './media/introgirl.gif';
        
        setTimeout(() => {
            girl.src = './media/repeatgirl.gif';
            setTimeout( () =>{
                

                console.log(`girl offsetHeight ${girl.offsetHeight} and offsetWidth ${girl.offsetWidth}`);

                
                heart.style.left = girl.style.left;
                heart.style.top = girl.style.top;
                heart.style.height = girl.offsetHeight;
                heart.style.width = girl.offsetWidth;    
                container.append(heart);
                
            }, 5000);
        }, 5000);
    }else{
        // ALONE GIRL
        
        girl.src = './media/girlalone.gif';
        setTimeout(() => {
            
            heart.style.left = girl.style.left;
            heart.style.top = girl.style.top;
            heart.style.height = girl.offsetHeight;
            heart.style.width = girl.offsetWidth;   
            container.append(heart);
        }, 5000);
    }


    container.appendChild(girl);
}



export function setCookie(){
    document.cookie = `girl=true; expires=${10 * 1000};path=/`;  // cookie is alive for only 1 minute
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

function checkBoy(){
    return getCookie('boy');
}