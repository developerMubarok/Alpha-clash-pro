// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
// // Show the playground
//     const playGroundSection=document.getElementById('play-ground');
//     // console.log(playGroundSection.classList);
//     playGroundSection.classList.remove('hidden')

// }
function handleKeyBoardKeyUpEvent(event){
    const playerPressed =event.key;
    console.log('player pressed',playerPressed);
    // stop the game if pressed 'esc'
    if(playerPressed === 'Escape'){
        gameOver()
    }
    
    // get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);
    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        const currentScore =getTextElementValueById('current-score')
        const updatedScore=currentScore +1;
        setTextElementValueById('current-score', updatedScore);


        // -------------------------------------------------------------
        // console.log('you have pressed correctly', expectedAlphabet);
        // // update score:
        // // 1.get the current score
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);
        // console.log(currentScore);
        // const currentScore=getTextElementValueById('current-score');
        // // 2. Increase the score by 1
        const newScore=currentScore +1;
        // // Show the update score
        // currentScoreElement.innerText=newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updateLife= currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0){
            gameOver();
        }





        // -------------------------------------------------
        // // step:1- get the current life number
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText)
        // // step:2-reduce the life count 
        // const newLife=currentLife -1;
        // // step:3- Display the update life count
        // currentLifeElement.innerText=newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup',handleKeyBoardKeyUpEvent)

function continueGame(){
    //step-1: Generate a random Alphabet
    const alphabet=GetARandomAlphabet();
    // console.log('your random alphabet', alphabet);
    // set normally generated to the screen(show it)
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText= alphabet;

    // set background color
    setBackgroundcolorByID(alphabet);


}

function play(){
    // hide everthing show only the playground
    hideElementByID('home-screen');
    hideElementByID('final-score')
    showElementById('play-ground');
    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}
function gameOver(){
   hideElementByID('play-ground');
   showElementById('final-score');
   //    update final score
//    1.get the final score
   const lastScore=getTextElementValueById('current-score');
   console.log(lastScore);
   setTextElementValueById('last-score', lastScore);
//    clear the last selected alphabet highlight
     const currentAlphabet=getElementTextById('current-alphabet');
     removeBackgroundColorById(currentAlphabet)
}
