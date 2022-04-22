class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(callback) {
    if(!callback)
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1 * 1000)
  }

  getMinutes() {
    let mins = Math.floor(this.currentTime / 60);
    return mins
  }

  getSeconds() {
    let secs = 0;
    if(this.currentTime % 60 === 0)
    secs += this.currentTime % 60;

    return secs
  }

  computeTwoDigitNumber(value) {
    let valueToString = value.toString();

    if(valueToString.length < 2)
    "0" + valueToString;

    return valueToString
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = computeTwoDigitNumber(this.getMinutes());
    let seconds = computeTwoDigitNumber(this.getSeconds());

    let fullTime =  minutes + ":" + seconds;

    return fullTime

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

//let chron1 = new Chronometer
//chron1.start();

//setInterval(()=>console.log(chron1.currentTime), 1*1000)

//chron1.currentTime.getMinutes()

//console.log(chron1.currentTime)