const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetbutton = document.querySelector('.btn__reset');
let missed = 0;
const phrases = [
    'who are you',
    'how are you ',
    'what time is it',
    'what is the approximate time in seconds that has passed since the starting of the digital game of guessing',
    'where is the sun located',
    'my name is not one that is comprehendable',
    'i am doing vaugely',
    'it is time to feed the hippos',
    'the approximate time in seconds that has passed since the starting of the digital game of guessing is one second',
];

//hide overlay, currently not working, not sure why 
const overlay = document.getElementById('overlay')
resetbutton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// return a random phrase from an array 
let randomnumofnine = Math.floor(Math.random() * 9);
const getRandomPhraseAsArray = arr => {
return arr[randomnumofnine];
}
const randomphrase = getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display 
const getUl = document.querySelector('ul')
const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i++) {
        const createLi = document.createElement("li");
        createLi.textContent = arr[i];
        if (createLi.textContent == " ") {createLi.className = 'space'}
             else {createLi.className = 'letter'}
        getUl.append(createLi);
    }
    
}
addPhraseToDisplay(randomphrase)

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    button.className = 'chosen'
    checkLetter(button)
  }
});

// check if a letter is in the phrase
const letter = document.getElementsByClassName('letter');
const hearts = document.querySelectorAll('img');
const checkLetter = button =>  {
    let match = null;
    for (let i = 0; i < letter.length; i++) {
    if (button.textContent === letter[i].textContent) {
        letter[i].classList.add('show');
        match = letter;
        } 
    }
    if (match == null)  {
        hearts[missed].src = "./images/lostHeart.png";
        missed += 1;
        }
    return match;
}

 // check if the game has been won or lost 
const show = document.getElementsByClassName('show');
const headline = document.getElementsByClassName('title')
const checkwin = () => {
if (show.length === letter.length) {
    overlay.className = "win"
    overlay.style.display = 'flex'
    headline.textContext = 'You Won'
}
else if (missed > 4) {
    overlay.className = "lose"
    overlay.style.display = 'flex'
    headline.textContent = 'You Lost'
}
}
checkwin()