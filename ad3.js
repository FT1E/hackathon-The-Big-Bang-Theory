
// this is the only file being imported in html
// it determines which ad to show on which ad-space


// randomizing algorithm


// 
for(let i=1; i<=2; i++){
    let container = document.getElementById(`div${i}`);

    if(Math.random() < 0.5){
        // our ad



    }else{
        // boring ad
        let ad = document.createElement('img');
        ad.src = './media/boringAd.png';
        ad.href = '#';

    }
}


function rand(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min );
}