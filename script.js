function changeText() {
    // this should change the displlay text
    let textList = ['Good Morning','Welcome!','Have a nice day','what a beautiful Day!','Love is life'];
    let randomNumber = getRandomNumber(0, textList.length - 1);
    console.log(randomNumber);
    document.getElementById('header').innerHTML = textList[randomNumber];
}

function getRandomNumber(min,max) {
    // generate a random number between a range
    return Math.floor(Math.random()*(max-min + 1)+min);
}