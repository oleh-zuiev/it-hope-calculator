/* eslint-disable no-unused-vars */
'use strict'
// =========refs to dom elements=============
const resultRef = document.querySelector('.js-result-screen');
const acBtnRef = document.querySelector('.js-acBtn');
const oppSignBtnRef = document.querySelector('.js-oppSignBtn');
const percentBtnRef = document.querySelector('.js-percentBtn');
const divisionBtnRef = document.querySelector('.js-divisionBtn');
const sevenBtnRef = document.querySelector('.js-sevenBtn');
const eightBtnRef = document.querySelector('.js-eightBtn');
const nineBtnRef = document.querySelector('.js-nineBtn');
const multiplyBtnRef = document.querySelector('.js-multiplyBtn');
const fourBtnRef = document.querySelector('.js-fourBtn');
const fiveBtnRef = document.querySelector('.js-fiveBtn');
const sixBtnRef = document.querySelector('.js-sixBtn');
const subtractBtnRef = document.querySelector('.js-subtractBtn');
const oneBtnRef = document.querySelector('.js-oneBtn');
const twoBtnRef = document.querySelector('.js-twoBtn');
const threeBtnRef = document.querySelector('.js-threeBtn');
const addBtnRef = document.querySelector('.js-addBtn');
const zeroBtnRef = document.querySelector('.js-zeroBtn');
const pointBtnRef = document.querySelector('.js-pointBtn');
const isBtnRef = document.querySelector('.js-isBtn');
// --------
const arrOfmath = [];
// const pushToArrOfMath = function (x) {
//     arrOfmath.push(x);
// };
// ============event-listeners of number buttons==========
// oneBtnRef.addEventListener('click', pushToArrOfMath(1));
// twoBtnRef.addEventListener('click', pushToArrOfMath(2));
// threeBtnRef.addEventListener('click', pushToArrOfMath(3));
// isBtnRef.addEventListener('click', function(){
//     console.log(arrOfmath);
// })
oneBtnRef.addEventListener('click', function () {
    arrOfmath.push('1');
});
twoBtnRef.addEventListener('click', function () {
    arrOfmath.push('2');
});
threeBtnRef.addEventListener('click', function () {
    arrOfmath.push('3');
});
fourBtnRef.addEventListener('click', function () {
    arrOfmath.push('4');
});
fiveBtnRef.addEventListener('click', function () {
    arrOfmath.push('5');
});
sixBtnRef.addEventListener('click', function () {
    arrOfmath.push('6');
});
sevenBtnRef.addEventListener('click', function () {
    arrOfmath.push('7');
});
eightBtnRef.addEventListener('click', function () {
    arrOfmath.push('8');
});
nineBtnRef.addEventListener('click', function () {
    arrOfmath.push('9');
});
zeroBtnRef.addEventListener('click', function () {
    arrOfmath.push('0');
});
// ------event listeners of math operators--
addBtnRef.addEventListener('click', function () {
    arrOfmath.push('+');
});
subtractBtnRef.addEventListener('click', function () {
    arrOfmath.push('-');
});
divisionBtnRef.addEventListener('click', function () {
    arrOfmath.push('/');
});
multiplyBtnRef.addEventListener('click', function () {
    arrOfmath.push('*');
});

isBtnRef.addEventListener('click', function(){
    console.log(arrOfmath);
})
// ============logics==============
