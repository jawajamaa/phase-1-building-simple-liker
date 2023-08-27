// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modalErrorClass = document.body.querySelector("div");
const heartButtons = document.getElementsByClassName("like-glyph");
console.log(heartButtons);
console.log(modalErrorClass);

for (let index = 0; index < heartButtons.length; index++) {
heartButtons[index].addEventListener("click", (event) => {
console.log(event.target.textContent)
mimicServerCall()
.then(()=> {
  if (event.target.textContent === EMPTY_HEART) {
    event.target.textContent = FULL_HEART;
    event.target.classList.add("activated-heart");
  }
  else if (event.target.textContent === FULL_HEART) {
    event.target.textContent = EMPTY_HEART;
    event.target.classList.remove("activated-heart");
  }
})
.catch((error) => {
  console.error(error.message); 
  modalErrorClass.classList.remove("hidden");
  setTimeout(() => {
    modalErrorClass.classList.add("hidden");
  }, 3000);
})
})}


// heartButton.addEventListener("click",renderHeartButton);

// function eventHandler(event){
//   heartButton.addEventListener(click, event => {
//     const myHeartClicked = document.getElementById(`${event.target.id}`)
//   });
//   return myHeartClicked;
//   renderHeartButton (myHeartClicked);
// }

// function renderHeartButton () { 
//   mimicServerCall()
//   .then((response) => {
//     if (heartButton.textContent === EMPTY_HEART) {
//       heartButton.textContent = FULL_HEART;
//       heartButton.textContent.append(heartButton.textContent.activated-heart);
//     }
//     else if (heartButton.textContent === FULL_HEART) {
//       heartButton.textContent = EMPTY_HEART;
//     }})
//       .catch((error) => {
//         console.error(error);
//         setTimeout(() => {
//           hiddenModal.remove()
//         }, "3000")
//       });


// }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
