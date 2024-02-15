function hideElementByID(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundcolorByID(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementId){
   const element =document.getElementById(elementId);
   element.classList.remove('bg-orange-400');
}

function GetARandomAlphabet(){
    // get or create an alphabet array 
    const alphabetString='abcdefghijklmnopqrstuvwyz';
    const alphabets=alphabetString.split('');
    // console.log(alphabets);
    // get a random index between 0-25
    const randomNumber =Math.random()* 25;
    const index =Math.round(randomNumber);
    console.log(index);

    const alphabet =alphabets[index];
    // console.log(index, alphabet);
    return alphabet
}