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
    if (resultScreenRef.classList.contains('sm-fs')) {
        resultScreenRef.classList.remove('sm-fs');
    }
}
const calculateResult = function () {
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    let finalResult;
// const actionSign = '+';

switch (actionSign) {
  case '+':
    finalResult = (numOne*1000000+numTwo*1000000)/1000000;
    break;

  case '-':
    finalResult = (numOne*1000000-numTwo*1000000)/1000000;
    break;

  case '/':
    finalResult = ((numOne*1000000)/(numTwo*1000000));
        break;
    case 'X':
    finalResult = ((numOne*1000000)*(numTwo*1000000))/1000000000000;
    break;
    }
    resultScreenRef.textContent = finalResult;
    if (resultScreenRef.textContent.length>10) {
        resultScreenRef.classList.add('sm-fs');
    }
    if (finalResult === 5 / 0) {
        resultScreenRef.textContent = 'division by zero';
    }
    
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
        const noZero = fixedResult.toString();
        const answerPercent = Number(noZero);
    resultScreenRef.textContent = answerPercent; 
    }
   if (resultScreenRef.textContent.length>10) {
        resultScreenRef.classList.add('sm-fs');
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
    if (numTwo === '' && actionSign === ''&& numerals.includes(eTxt)&&numOne.length<9) {
        if (numOne.includes('.') && eTxt === '.') {
            return;
        }
        
        numOne += eTxt;
        if (numOne === '.' && numOne.length === 1) {
            numOne = '0.';
        }
        // if (!numOne.includes('.')) {
        //     numOne = Number.parseInt(numOne, 10);
        // }
        // Number.parseInt( "123FA", 10 );-прописать условие через isInteger, чтобы избав. от leading zero
    resultScreenRef.textContent = numOne;

    }
    // console.log(numOne);
    if (numOne !== '' &&actionSign === ''&& mathOperators.includes(eTxt)) {
        actionSign = eTxt;
    resultScreenRef.textContent = actionSign;
    }
    if (numOne !== '' && actionSign !== '' && numerals.includes(eTxt) && numTwo.length < 9) {
         if (numTwo.includes('.') && eTxt === '.') {
            return;
        }
        numTwo += eTxt;
        if (numTwo === '.' && numTwo.length === 1) {
            numTwo = '0.';
        }
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
    if (eTxt === '+/-') {
        console.log('changing sign');
        if (numTwo === '' && actionSign === ''&&numOne !== '') {
            numOne = -numOne;
    resultScreenRef.textContent = numOne;
            
        }
        if (numOne !== '' && actionSign !== '' && numTwo !== '') {
            numTwo = -numTwo;
    resultScreenRef.textContent = numTwo;

        }
    }
    // console.log(numOne, actionSign, numTwo);
    return;
})
