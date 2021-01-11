// Code your solutions in this file
function writeCards(aOSN,eN){
    var a = [];
    for(let i = 0; i < aOSN.length; i++){
        a.push(`Thank you, ${aOSN[i]}, for the wonderful ${eN} gift!`);
    }
    return a;
}

function countDown(n){
    for(let i = n; i >= 0 ; i--){
        console.log(i);
    }
}