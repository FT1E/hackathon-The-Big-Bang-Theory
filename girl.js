// the file importing the module needs to set container with ID


let container = document.getElementById('div2'); 

const girl = document.createElement('img');


function start(){
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


    container.appendChild(aloneGirl);
}


// ALONE GIRL

// const aloneGirl = document.createElement("img");
// aloneGirl.id = "aloneGirl";
// aloneGirl.src = "C:/Users/PC-2/Desktop/Hakaton '24/womanalone.gif";
// aloneGirl.style.position = "relative";

// GIRL WITH A BOY

// const introgirl = document.createElement("img");
// introgirl.id = "introg";
// introgirl.src = "C:/Users/PC-2/Desktop/Hakaton '24/introgirl.gif";
// introgirl.style.position = "relative";
//introgirl.style.width = 33%;



// container1.appendChild(introboy);
// container2.appendChild(introgirl);


//const introBoyGif = document.getElementById("intob");
//const introGirlGif = document.getElementById("introg");
           

// function loopGifs() {
//    introboy.src = "C:/Users/PC-2/Desktop/Hakaton '24/repeatboy.gif";
//    introgirl.src = "C:/Users/PC-2/Desktop/Hakaton '24/repeatgirl.gif";
// }




function setCookie(){
    document.cookie = `girl=true; expires=${60 * 1000};path=/`;  // cookie is alive for only 1 minute
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