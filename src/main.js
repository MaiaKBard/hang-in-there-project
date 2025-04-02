// This JavaScript file is used to create and manage inspirational posters by 
// randomly selecting images, titles, and quotes. It defines variables, event 
// listeners, and functions to support this functionality.

// Query Selectors
// DOM Elements
let imageElement = document.querySelector('.poster-img')
let titleElement = document.querySelector('.poster-title')
let quoteElement = document.querySelector('.poster-quote')

// Input Elements
let posterImageURL = document.querySelector('#poster-image-url')
let posterTitle = document.querySelector('#poster-title')
let posterQuote = document.querySelector('#poster-quote')

// Grid Elements
let savedPostersGrid = document.querySelector('.saved-posters-grid')
let unmotivationalGrid = document.querySelector('.unmotivational-poster-grid')

// Sections
let posterFormSection = document.querySelector('.poster-form')
let mainPosterSection = document.querySelector('.main-poster')
let savedPosterSection = document.querySelector('.saved-posters')
let unmotivationalPosterSection = document.querySelector('.unmotivational-poster')

// Buttons
let showRandomBtn = document.querySelector('.show-random')
let ownPosterBtn = document.querySelector('.show-form')
let showMainBtn = document.querySelector('.show-main')
let showSavedBtn = document.querySelector('.show-saved')
let backToMainBtn = document.querySelector('.back-to-main')
let makePosterBtn = document.querySelector('.make-poster')
let savePosterBtn = document.querySelector('.save-poster')
let unmotivationalBtn = document.querySelector('.unmotivational')
let unmotivationalBackMainBtn = document.querySelector('.main-appear')


//Data
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
]
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
]
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
]

let unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
]

// Global Variables
var savedPosters = []
var currentPoster
let posters = cleanData()

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

unmotivationalBtn.addEventListener('click', function() {
  removeHidden(unmotivationalPosterSection)
  addHidden(mainPosterSection)
  rendersUnmotivationalPosters()
})

unmotivationalBackMainBtn.addEventListener('click', function () {
  addHidden(unmotivationalPosterSection)
  removeHidden(mainPosterSection)
})

unmotivationalGrid.addEventListener('dblclick', deletePosters)

// Functions/Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
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

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function removeHidden(element) {
  element.classList.remove('hidden')
}

function addHidden(element) {
  element.classList.add('hidden')
}

function createsUserPoster() {
  currentPoster = createPoster(posterImageURL.value, posterTitle.value, posterQuote.value)
  updatesPosterDisplay(currentPoster)
}

function addsToArrays() {
  if (posterImageURL.value && posterTitle.value && posterQuote.value) {
    images.push(posterImageURL.value)
    titles.push(posterTitle.value)
    quotes.push(posterQuote.value)
    console.log("Data added successfully!")
  } else {
    console.log("Please fill in all fields.")
  }
}

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
  savedPostersGrid.innerHTML = ''
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

function cleanData() {
  let cleanedPosters = []
  unmotivationalPosters.forEach((poster) => {
    let newPosters = createPoster(poster.img_url, poster.name, poster.description)
    cleanedPosters.push(newPosters)
  })
  return cleanedPosters
}

function rendersUnmotivationalPosters() {
  unmotivationalGrid.innerHTML = ''
  posters.forEach((poster) => {
    let newItem = document.createElement('div')
    newItem.classList.add('small-poster')
    let img = document.createElement('img')
    img.src = poster.imageURL
    let title = document.createElement('h2')
    title.innerText = poster.title
    let quote = document.createElement('h4')
    quote.innerText = poster.quote
    unmotivationalGrid.appendChild(newItem)
    newItem.appendChild(img)
    newItem.appendChild(title)
    newItem.appendChild(quote)
  })
}

function deletePosters(event) {
  let posterElement = event.target.closest('.small-poster')
  if (posterElement) {
    let imgElement = posterElement.children[0]
    let relativeSrc = '.' + imgElement.src.substring(imgElement.src.indexOf('/assets/'))
    posters = posters.filter(poster => poster.imageURL !== relativeSrc)
    rendersUnmotivationalPosters()
  }
}




