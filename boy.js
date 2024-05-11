// the file importing the module needs to set container with ID


// export let container; 

const boy = document.createElement('img');
boy.style.width = "100%";


// setCookie();
// setTimeout(start, 2000);    // give time for other ads to load (in case the girl ad is shown)


export function start(container){
    
    
    if(checkGirl()){
        // BOY WITH GIRL
        
        boy.src = './media/introboy.gif';
        
        setTimeout(() => {
            boy.src = './media/repeatboy.gif';
        }, 5000);
    } else{
        // ALONE BOY
        
        boy.src = './media/boyalone.gif'; 
    }

    container.append(boy)
}



export function setCookie(){
    document.cookie = `girl=true; expires=${10 * 1000};path=/`;  // cookie is alive for only 10 secs
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