console.log('chronometer');

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  setInterval(() => {
    const seconds = printSeconds();
    const minutes = printMinutes();

    minDecElement.innerText = minutes[0];
    minUniElement.innerText = minutes[1];
    secDecElement.innerText = seconds[0];
    secUniElement.innerText = seconds[1];
  }, 1000);
}

//printTime();

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

//printMinutes()

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const timeSplit = chronometer.split();

  const newSplit = document.createElement('li');

  newSplit.innerText = timeSplit;

  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  splitsElement.removeChildren();
}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('split');
  btnRightElement.innerText = 'RESET';

  if (btnLeftElement.innerText === 'STOP') {
    btnLeftElement.innerText = 'START';
    chronometer.stop();
  } else {
    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';
    chronometer.start(printTime);
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'SPLIT') {printSplit()}

  if (btnRightElement.innerText === 'RESET') {chronometer.reset()}
});
