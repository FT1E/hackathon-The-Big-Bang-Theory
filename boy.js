// the file importing the module needs to set container with ID


// export let container; 

export const boy = document.createElement('img');
boy.style.width = "100%";
// boy.style.height = "";
boy.style.position = 'absolute';

const heart = document.createElement('img');

heart.style.zIndex = '2';
heart.src = './media/redheart.png';
heart.style.position = 'absolute';
heart.style.left = boy.style.left;
// heart.style.left = `${Number.parseInt(heart.style.width)}px`;

// heart.style.left = `${Number.parseInt(boy.offsetWidth) / 2}px`;


heart.onmouseover = () =>{
    heart.onmouseover = "";

    let scale = 100;

    const interval = setInterval(() => {
        
        heart.style.transform = `scale(${scale / 100})`;
        if(scale++ >= 200){
            clearInterval(interval);
            

            let container = boy.parentElement;
            container.removeChild(boy);
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


let ad_iframe = document.createElement('iframe');
ad_iframe.src = 'https://tinder.com';
ad_iframe.style.opacity = '0';
ad_iframe.style.zIndex = '2';
ad_iframe.style.width = '100%';
ad_iframe.style.height = '100%';
ad_iframe.style.position = 'relative';



// setCookie();
// setTimeout(start, 2000);    // give time for other ads to load (in case the girl ad is shown)





export function start(container){
    
    
    console.log(`called start with container ${container}`);
    
    
    container.style.position = 'relative';

    // console.log(`checkGirl() = ${checkGirl()}`)
    
    // container.append(ad_iframe);
    
    if(checkGirl()){
        // BOY WITH GIRL
        
        boy.src = './media/introboy.gif';
        
        setTimeout(() => {
            boy.src = './media/repeatboy.gif';
            setTimeout(() => {
                // container.removeChild(boy);
                
                heart.style.left = boy.style.left;
                heart.style.top = boy.style.top;
                heart.style.width = boy.offsetWidth;
                heart.style.height = boy.offsetHeight;
                console.log(`boy offsetWidth ${boy.offsetWidth} and offsetHeight ${boy.offsetHeight}`);
                container.append(heart);
            }, 5000);
        }, 5000);


    } else{
        // ALONE BOY
        
        boy.src = './media/boyalone.gif';
        setTimeout(() => {
            // container.removeChild(boy);
            
            heart.style.left = boy.style.left;
            heart.style.top = boy.style.top;
            heart.style.width = boy.offsetWidth;
            heart.style.height = boy.offsetHeight;
            console.log(`boy offsetWidth ${boy.offsetWidth} and offsetHeight ${boy.offsetHeight}`);
                
            container.append(heart);
        }, 5000);
    }

    container.append(boy);



}



export function setCookie(){
    document.cookie = `boy=true; expires=${10 * 1000};path=/`;  // cookie is alive for only 10 secs
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

function checkGirl(){
    return getCookie('girl');
}