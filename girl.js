// the file importing the module needs to set container with ID


// export let container; 

const girl = document.createElement('img');
girl.style.width = "100%";


// setCookie();

// setTimeout(start, 2000);    // give time for other ads to load (in case the boy ad is shown)



export function start(container){
    if(checkBoy()){
        // GIRL WITH BOY

        girl.src = './media/introgirl.gif';
        
        setTimeout(() => {
            girl.src = './media/repeatgirl.gif';
        }, 5000);
    }else{
        // ALONE GIRL
        
        girl.src = './media/girlalone.gif';
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