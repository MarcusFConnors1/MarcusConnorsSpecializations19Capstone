const firstLetterForm = document.querySelector('form#firstletter')
const firstLetterInput = document.querySelector('input.firstinput')
const secondLetterForm = document.querySelector('form#secondletter')
const secondLetterInput = document.querySelector('input.secondinput')
const thirdLetterForm = document.querySelector('form#thirdletter')
const thirdLetterInput = document.querySelector('input.thirdinput')
const fourthLetterForm = document.querySelector('form#fourthletter')
const fourthLetterInput = document.querySelector('input.fourthinput')
const fifthLetterForm = document.querySelector('form#fifthletter')
const fifthLetterInput = document.querySelector('input.fifthinput')
const sixthLetterForm = document.querySelector('form#sixthletter')
const sixthLetterInput = document.querySelector('input.sixthinput')
const smileyFace = document.querySelector('main.homeMain')
const desc = document.querySelector('p.gamedesc')
const mainContent = document.querySelector('div.guessing')
const contentLose = document.querySelector('section.content')
const header = document.querySelector('header')
const footer = document.querySelector('footer')

let firstLetterCleared = false
let secondLetterCleared = false
let thirdLetterCleared = false
let fourthLetterCleared = false
let fifthLetterCleared = false
let sixthLetterCleared = false

let firstAnswer = ' '
let secondAnswer = ' '
let thirdAnswer = ' '
let fourthAnswer = ' '
let fifthAnswer = ' '
let sixthAnswer = ' '

let attempts = 0;

const headers = {
    'Content-Type': 'application/json'
}

async function firstLetter (evt) {
    await evt.preventDefault()
    let firstAnswer = firstLetterInput.value
    if(firstAnswer.length > 1 || firstAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    await fetch(`http://localhost:8080/public/home/letters/1/${firstAnswer}`, {
        method: "PUT",
        body: JSON.stringify(firstAnswer),
        headers: headers
    })
        .catch(err => console.log(`Error: ${err}`))
        .then(res => {
            firstLetterCheck(firstAnswer)
            smileyFaceStatus()
            youWon()
        })
    firstLetterInput.value = ''
}

async function secondLetter (evt) {
    await evt.preventDefault()
    let secondAnswer = secondLetterInput.value
    if(secondAnswer.length > 1 || secondAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    await fetch(`http://localhost:8080/public/home/letters/2/${secondAnswer}`, {
        method: "PUT",
        body: JSON.stringify(secondAnswer),
        headers: headers
    })
        .catch(err => console.log(`Error: ${err}`))
        .then(res => {
            secondLetterCheck(secondAnswer)
            smileyFaceStatus()
            youWon()
        })
    secondLetterInput.value = ''
}

async function thirdLetter (evt) {
    await evt.preventDefault()
    let thirdAnswer = thirdLetterInput.value
    if(thirdAnswer.length > 1 || thirdAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    await fetch(`http://localhost:8080/public/home/letters/3/${thirdAnswer}`, {
        method: "PUT",
        body: JSON.stringify(thirdAnswer),
        headers: headers
    })
        .catch(err => console.log(`Error: ${err}`))
        .then(res => {
            thirdLetterCheck(thirdAnswer)
            smileyFaceStatus()
            youWon()
        })
    thirdLetterInput.value = ''
}

async function fourthLetter (evt) {
    await evt.preventDefault()
    let fourthAnswer = fourthLetterInput.value
    if(fourthAnswer.length > 1 || fourthAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    await fetch(`http://localhost:8080/public/home/letters/4/${fourthAnswer}`, {
        method: "PUT",
        body: JSON.stringify(fourthAnswer),
        headers: headers
    })
        .catch(err => console.log(`Error: ${err}`))
        .then(res => {
            fourthLetterCheck(fourthAnswer)
            smileyFaceStatus()
            youWon()
        })
    fourthLetterInput.value = ''
}

async function fifthLetter (evt) {
    await evt.preventDefault()
    let fifthAnswer = fifthLetterInput.value
    if(fifthAnswer.length > 1 || fifthAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    await fetch(`http://localhost:8080/public/home/letters/5/${fifthAnswer}`, {
        method: "PUT",
        body: JSON.stringify(fifthAnswer),
        headers: headers
    })
        .catch(err => console.log(`Error: ${err}`))
        .then(res => {
            fifthLetterCheck(fifthAnswer)
            smileyFaceStatus()
            youWon()
        })
    fifthLetterInput.value = ''
}

async function sixthLetter (evt) {
    await evt.preventDefault()
    let sixthAnswer = sixthLetterInput.value
    if(sixthAnswer.length > 1 || sixthAnswer === ""){
        return alert("Ya Dummy. I only need one letter here.")
    }
    await fetch(`http://localhost:8080/public/home/letters/6/${sixthAnswer}`, {
        method: "PUT",
        body: JSON.stringify(sixthAnswer),
        headers: headers
    })
        .catch(err => console.log(`Error: ${err}`))
        .then(res => {
            sixthLetterCheck(sixthAnswer)
            smileyFaceStatus()
            youWon()
        })
    sixthLetterInput.value = ''

}

function youWon () {
    if(firstLetterCleared === true && secondLetterCleared === true && thirdLetterCleared === true && fourthLetterCleared === true && fifthLetterCleared === true && sixthLetterCleared === true){
        mainContent.classList.add('hide')
        header.classList.add('hide')
        footer.classList.add('hide')
        const lossCont = document.createElement('div')
        lossCont.classList.add('lost')
        contentLose.appendChild(lossCont)
        const loss = document.createElement('h1')
        const test = document.createTextNode("Congrats")
        loss.appendChild(test)
        contentLose.appendChild(loss)
        const lossDesc = document.createElement('h3')
        const test1 = document.createTextNode("He Goes Free! I knew you could do it")
        lossDesc.appendChild(test1)
        contentLose.appendChild(lossDesc)
    }
}

function smileyFaceStatus () {
    if(attempts === 1){
        smileyFace.style.backgroundImage = 'url("/CSS/smileyFace2.png")'
        desc.innerHTML = "Yikes! That's one strike right there! Look what you did! Hope you can get it right before he gets worse! Did you forget the first letter is A?"
    }else if(attempts === 2){
        smileyFace.style.backgroundImage = 'url("/CSS/smileyFace3.png")'
        desc.innerHTML = "Uh Oh, he's, not looking too good. I don't know how much more me can take. Are you even trying now? Make sure you know the first letter is A!"
    }else if(attempts === 3){
        smileyFace.style.backgroundImage = 'url("/CSS/smileyFace4.png")'
        mainContent.classList.add('hide')
        header.classList.add('hide')
        footer.classList.add('hide')
        const lossCont = document.createElement('div')
        lossCont.classList.add('lost')
        contentLose.appendChild(lossCont)
        const loss = document.createElement('h1')
        const test = document.createTextNode("YOU LOSE")
        loss.appendChild(test)
        contentLose.appendChild(loss)
        const lossDesc = document.createElement('h3')
        const test1 = document.createTextNode("Want to Try Again? Click Refresh")
        lossDesc.appendChild(test1)
        contentLose.appendChild(lossDesc)
    }
}

async function getSmileyFaceStatus() {
    await fetch(`http://localhost:8080/public/home`, {
        method: "GET",
        headers: headers
    })
        .then(res => {
            attempts = res.data
            smileyFaceStatus()
        })
}

async function firstForm() {
    await fetch(`http://localhost:8080/public/home/input/1`, {
        method: "GET",
        headers: headers
    })
        .then(res => {
            if(res.data === true){
                firstLetterForm.classList.add('hide')
                firstLetterCleared = true
                youWon()
            }
        })
}

async function secondForm() {
    await fetch(`http://localhost:8080/public/home/input/2`, {
        method: "GET",
        headers: headers
    })
        .then(res => {
            if(res.data === true){
                secondLetterForm.classList.add('hide')
                secondLetterCleared = true
                youWon()
            }
        })
}

async function thirdForm() {
    await fetch(`http://localhost:8080/public/home/input/3`, {
        method: "GET",
        headers: headers
    })
        .then(res => {
            if(res.data === true){
                thirdLetterForm.classList.add('hide')
                thirdLetterCleared = true
                youWon()
            }
        })
}

async function fourthForm() {
    await fetch(`http://localhost:8080/public/home/input/4`, {
        method: "GET",
        headers: headers
    })
        .then(res => {
            if(res.data === true){
                fourthLetterForm.classList.add('hide')
                fourthLetterCleared = true
                youWon()
            }
        })
}

async function fifthForm() {
    await fetch(`http://localhost:8080/public/home/input/5`, {
        method: "GET",
        headers: headers
    })
        .then(res => {
            if(res.data === true){
                fifthLetterForm.classList.add('hide')
                fifthLetterCleared = true
                youWon()
            }
        })
}

async function sixthForm() {
    await fetch(`http://localhost:8080/public/home/input/6`, {
        method: "GET",
        headers: headers
    })
        .then(res => {
            if(res.data === true){
                sixthLetterForm.classList.add('hide')
                sixthLetterCleared = true
                youWon()
            }
        })
}

function firstLetterCheck(lett){
    if(lett == "A" || lett == "a"){
        firstLetterCleared = true
        firstLetterForm.classList.add('hide')
        alert('First Letter Down')
    }else{
        attempts ++
        alert('Gonna Have to Try Harder Than That!')
    }
}

function secondLetterCheck(lett){
    if(lett == "e" || lett == "E"){
        secondLetterCleared = true
        secondLetterForm.classList.add('hide')
        alert('Second Letter Down')
    }else{
        attempts ++
        alert('Gonna Have to Try Harder Than That!')
    }
}

function thirdLetterCheck(lett){
    if(lett == "S" || lett == "s"){
        thirdLetterCleared = true
        thirdLetterForm.classList.add('hide')
        alert('Third Letter Down')
    }else{
        attempts ++
        alert('Gonna Have to Try Harder Than That!')
    }
}

function fourthLetterCheck(lett){
    if(lett == "T" || lett == "t"){
        fourthLetterCleared = true
        fourthLetterForm.classList.add('hide')
        alert('Fourth Letter Down')
    }else{
        attempts ++
        alert('Gonna Have to Try Harder Than That!')
    }
}

function fifthLetterCheck(lett){
    if(lett == "R" || lett == "r"){
        fifthLetterCleared = true
        fifthLetterForm.classList.add('hide')
        alert('Fifth Letter Down')
    }else{
        attempts ++
        alert('Gonna Have to Try Harder Than That!')
    }
}

function sixthLetterCheck(lett){
    if(lett == "I" || lett == "i"){
        sixthLetterCleared = true
        sixthLetterForm.classList.add('hide')
        alert('Sixth Letter Down')
    }else{
        attempts ++
        alert('Gonna Have to Try Harder Than That!')
    }
}
// firstForm()
// secondForm()
// thirdForm()
// fourthForm()
// fifthForm()
// sixthForm()
// getSmileyFaceStatus()
youWon()

firstLetterForm.addEventListener('submit', firstLetter)
secondLetterForm.addEventListener('submit', secondLetter)
thirdLetterForm.addEventListener('submit', thirdLetter)
fourthLetterForm.addEventListener('submit', fourthLetter)
fifthLetterForm.addEventListener('submit', fifthLetter)
sixthLetterForm.addEventListener('submit', sixthLetter)