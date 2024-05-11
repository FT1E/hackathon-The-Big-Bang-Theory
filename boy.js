// the file importing the module needs to set container with ID


let container = document.getElementById('div1'); 



const boy = document.createElement('img');



function start(){

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








// ALONE BOY

// const aloneboy = document.createElement("img");
// aloneboy.id = "aloneB";
// aloneboy.src = "C:/Users/PC-2/Desktop/Hakaton '24/manalone.gif";
// aloneboy.style.position = "relative";


// container1.appendChild(aloneboy);


// // BOY WITH GIRL


// const introboy = document.createElement("img");
// introboy.id = "introb";
// introboy.src = "C:/Users/PC-2/Desktop/Hakaton '24/introboy.gif";
// introboy.style.position = "relative";


// container1.appendChild(introboy);


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

function checkGirl(){
    return getCookie('girl');
}