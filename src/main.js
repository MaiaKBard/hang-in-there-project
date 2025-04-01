// This JavaScript file is used to create and manage inspirational posters by 
// randomly selecting images, titles, and quotes. It defines variables, event 
// listeners, and functions to support this functionality.

// Query Selectors

//DOM Elements
let imageElement = document.querySelector('.poster-img');
let titleElement = document.querySelector('.poster-title');
let quoteElement = document.querySelector('.poster-quote');
  // - Input elements
let posterImageURL = document.querySelector('#poster-image-url')
let posterTitle = document.querySelector('#poster-title')
let posterQuote = document.querySelector('#poster-quote')
  // - Grid Element
let savedPostersGrid = document.querySelector('.saved-posters-grid')
//Section
let posterFormSection = document.querySelector('.poster-form')
let mainPosterSection = document.querySelector('.main-poster')
let savedPosterSection = document.querySelector('.saved-posters')
//Button
let showRandomBtn = document.querySelector('.show-random')
let ownPosterBtn = document.querySelector('.show-form')
let showMainBtn = document.querySelector('.show-main')
let showSavedBtn = document.querySelector('.show-saved')
let backToMainBtn = document.querySelector('.back-to-main')
let makePosterBtn = document.querySelector('.make-poster')
let savePosterBtn = document.querySelector('.save-poster')




//Data (Images, Titles, and Quotes)
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var savedPosters = []; //Stores Saved Posters
var currentPoster; // Undefined variable - Can use to set a current poster - possibly when displayed or when saved?

// Event Listeners
window.addEventListener('load', generatesRandomPoster)

showRandomBtn.addEventListener('click', generatesRandomPoster)

ownPosterBtn.addEventListener('click', function() {
  removeHidden(posterFormSection)
  addHidden(mainPosterSection)
})

showMainBtn.addEventListener('click', function() {
  removeHidden(mainPosterSection)
  addHidden(posterFormSection)
})

showSavedBtn.addEventListener('click', function() {
  removeHidden(savedPosterSection)
  addHidden(mainPosterSection)
  addsPostersToGrid()
})

backToMainBtn.addEventListener('click',function() {
  removeHidden(mainPosterSection)
  addHidden(savedPosterSection)
})

makePosterBtn.addEventListener('click', function(event) {
  event.preventDefault()
  addsToArrays()
  createsUserPoster()
  removeHidden(mainPosterSection)
  addHidden(posterFormSection)
})  

savePosterBtn.addEventListener('click', savingCurrentPoster)



// Functions/Event Handlers

//Selects Random Index Funtion
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generatesRandomPoster() {
  randomImageURL = images[getRandomIndex(images)]
  randomTitleText = titles[getRandomIndex(titles)]
  randomQuoteText = quotes[getRandomIndex(quotes)]

  currentPoster = createPoster(randomImageURL, randomTitleText, randomQuoteText)
  updatesPosterDisplay(currentPoster)
}

function updatesPosterDisplay(poster) {
  imageElement.src = poster.imageURL
  titleElement.innerText = poster.title
  quoteElement.innerText = poster.quote
}

//Creates Poster
function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

//Funtions that Remove & Add 'hidden' from an html element
function removeHidden(element) {
  element.classList.remove('hidden')
}

function addHidden(element) {
  element.classList.add('hidden')
}

// funtion that takes the input values and creates a new poster and saves it currentPoster
function createsUserPoster() {
  currentPoster = createPoster(posterImageURL.value, posterTitle.value, posterQuote.value)
  updatesPosterDisplay(currentPoster)
}
// funtion that adds user inputed values to the corresponding array
function addsToArrays() {
  if (posterImageURL.value && posterTitle.value && posterQuote.value) {
    images.push(posterImageURL.value);
    titles.push(posterTitle.value);
    quotes.push(posterQuote.value);
    console.log("Data added successfully!");
  } else {
    console.log("Please fill in all fields.");
  }
}




// function isValidURL(input) {
//   try {
//     new URL(input)
//     return true
//   } catch (err) {
//     return false
//   }
// }

// function needs to take our savedPosters array and display them as mini posters in the grid 
// 


function savingCurrentPoster() {
  currentPoster = createPoster(imageElement.src, titleElement.innerText, quoteElement.innerText)

  let catchingDuplicates = savedPosters.some(poster => poster.imageURL === currentPoster.imageURL && 
    poster.title === currentPoster.title && 
    poster.quote === currentPoster.quote)

  if (!catchingDuplicates) {
    savedPosters.push(currentPoster)
    console.log("Poster saved!")
  }
  else
    console.log("Duplicate poster detected, not saving.")
}

function addsPostersToGrid() {
  savedPosters.forEach((poster) => {
  let newDiv = document.createElement('div')
  newDiv.classList.add('mini-poster')

  let newImg = document.createElement('img')
  newImg.src = poster.imageURL

  let newQuote = document.createElement('h4')
  newQuote.innerText = poster.quote.innerText

  let newTitle = document.createElement('h2') 
  newTitle.innerText = poster.title.innerText

  savedPostersGrid.appendChild(newDiv)
  newDiv.appendChild(newImg)
  newDiv.appendChild(newTitle)
  newDiv.appendChild(newQuote)
})
}



