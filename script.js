function calc(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += Number(arr[i].value);
    }
    return result;
}

const black = document.getElementsByClassName('black');
const white = document.getElementsByClassName('white');
const blue = document.getElementsByClassName('blue');
const yellow = document.getElementsByClassName('yellow');
const red = document.getElementsByClassName('red');

const blackResultAll = document.getElementById('blackResultAll');
const whiteResultAll = document.getElementById('whiteResultAll');
const blueResultAll = document.getElementById('blueResultAll');
const yellowResultAll = document.getElementById('yellowResultAll');
const redResultAll = document.getElementById('redResultAll');

const blackResult5 = document.getElementById('blackResult5');
const whiteResult5 = document.getElementById('whiteResult5');
const blueResult5 = document.getElementById('blueResult5');
const yellowResult5 = document.getElementById('yellowResult5');
const redResult5 = document.getElementById('redResult5');

const sum = document.getElementById('sum');
const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    
    blackResultAll.innerHTML = "";        
    whiteResultAll.innerHTML = "";
    blueResultAll.innerHTML = "";
    yellowResultAll.innerHTML = "";
    redResultAll.innerHTML = "";
    blackResult5.innerHTML = "";
    whiteResult5.innerHTML = "";
    blueResult5.innerHTML = "";
    yellowResult5.innerHTML = "";
    redResult5.innerHTML = "";

});

sum.addEventListener('click', () => {
    const blackResult = calc(black);
    blackResultAll.innerHTML = blackResult;
    blackResult5.innerHTML = 20 - blackResult;

    const whiteResult = calc(white);
    whiteResultAll.innerHTML = whiteResult;
    whiteResult5.innerHTML = 20 - whiteResult;

    const blueResult = calc(blue);
    blueResultAll.innerHTML = blueResult;
    blueResult5.innerHTML = 20 - blueResult;

    const yellowResult = calc(yellow);
    yellowResultAll.innerHTML = yellowResult;
    yellowResult5.innerHTML = 20 - yellowResult;

    const redResult = calc(red); 
    redResultAll.innerHTML = redResult;
    redResult5.innerHTML = 20 - redResult;
});