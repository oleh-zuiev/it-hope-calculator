'use strict'

let numOne = '';
let numTwo = '';
let actionSign = '';
const numerals =['1','2','3','4','5','6','7','8','9','0','.']
const mathOperators = ['+', '-', 'X', '/', '%'];

const resultScreenRef = document.querySelector('.js-result-screen');
const btnContainerRef = document.querySelector('.btn-container');
const clearScreen = function () {
    console.log('AC')
    numOne = '';
    numTwo = '';
    actionSign = '';
    resultScreenRef.textContent = '0';
}
const calculateResult = function () {
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    let finalResult;
// const actionSign = '+';

switch (actionSign) {
  case '+':
    finalResult = numOne+numTwo;
    break;

  case '-':
    finalResult = numOne-numTwo;
    break;

  case '/':
    finalResult = numOne/numTwo;
        break;
    case 'X':
    finalResult = numOne*numTwo;
    break;
    }
    resultScreenRef.textContent = finalResult;
    
}
const calculatePercent = function () {
    console.log('calculating percent');
    numOne = Number(numOne);
    numTwo = Number(numTwo);    
    let finalResultPercent;
    finalResultPercent = numOne / 100 * numTwo;
    if (Number.isInteger(finalResultPercent)) {
    resultScreenRef.textContent = finalResultPercent;        
    } else {
    const fixedResult = finalResultPercent.toFixed(7);
        console.log(fixedResult);
        const noZero = fixedResult.toString();
        console.log(noZero);
        const answerPercent = Number(noZero);
    resultScreenRef.textContent = answerPercent; 
    }
   

}
btnContainerRef.addEventListener('click', function (e) {
    if (!e.target.classList.contains('btn')) {
        return;   
    }
    // resultScreenRef.textContent = eTxt;
    if (e.target.textContent === 'AC') {
        clearScreen();
    }
    const eTxt = e.target.textContent;
    if (numTwo === '' && actionSign === ''&& numerals.includes(eTxt)&&numOne.length<7) {
        numOne += eTxt;
        // Number.parseInt( "123FA", 10 );-прописать условие через isInteger, чтобы избав. от leading zero
    resultScreenRef.textContent = numOne;

    }
    // console.log(numOne);
    if (numOne !== '' &&actionSign === ''&& mathOperators.includes(eTxt)) {
        actionSign = eTxt;
    resultScreenRef.textContent = actionSign;
    }
    if (numOne !== '' && actionSign !== '' && numerals.includes(eTxt)&&numTwo.length<7) {
        numTwo += eTxt;
        resultScreenRef.textContent = numTwo;
    }
    if (numOne !== '' && actionSign !== '' && numTwo !== '' && eTxt === '=') {
        calculateResult();
        numOne = '';
        numTwo = '';
        actionSign = '';
    }
    if (numOne !== '' && actionSign === 'X' && numTwo !== '' && eTxt === '%') {
        calculatePercent();
        numOne = '';
        numTwo = '';
        actionSign = '';
    }
    // console.log(numOne, actionSign, numTwo);
    return;
})
