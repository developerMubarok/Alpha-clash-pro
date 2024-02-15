// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
// // Show the playground
//     const playGroundSection=document.getElementById('play-ground');
//     // console.log(playGroundSection.classList);
//     playGroundSection.classList.remove('hidden')

// }
function continueGame(){
    //step-1: Generate a random Alphabet
    const alphabet=GetARandomAlphabet();
    console.log('your random alphabet', alphabet);
    // set normally generated to the screen(show it)
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText= alphabet;

    // set background color
    setBackgroundcolorByID(alphabet);


}

function play(){
    hideElementByID('home-screen');
    showElementById('play-ground');
    continueGame()
}
