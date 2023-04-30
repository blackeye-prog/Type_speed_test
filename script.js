const setofWords= [
    "My name is Nilesh Srivastava and I'm a Student",
    "He found himself sitting at his computer, typing whatever came to mind. He was on a website entitled 10 fast fingers. This site tested how fast you were at typing. So he typed. He was currently typing about himself typing, which is odd in a way. He was now describing about how he was typing about himself typing.",
    "He quick brown fox jumps over the lazy dog is the most famous pangram, but there are many others. My favorite may be the five boxing wizards jump quickly."
];
const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime , endTime;

const playGame=() => {
    let randomNumber = Math.floor(Math.random()*setofWords.length);
    msg.innerText = setofWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime)*60);
    let finalMsg = "You type total at " + speed + " words per minutes.";
    finalMsg += compareWords(msg.innerText, totalStr);
   
    msg.innerText = finalMsg;


}
const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item, index) {
        if(item == words2[index]){
            cnt++;
        }
    });
    let errWords = (words1.length-cnt);
    return (" " + cnt+ " correct out of " + words1.length + " words and the total number of error are " + errWords + ".");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click' , function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})