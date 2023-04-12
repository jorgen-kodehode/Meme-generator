import { memeIMGsrc } from "./imgSrc.js";
const memeArray = [];
const genMemeBtn = document.getElementById("new-meme");
const displayMeme = document.getElementById("display-meme");
const resetButton = document.getElementById("reset-meme");
// Removed old comments of previous code.
function reset() {
  displayMeme.innerHTML = "";
}
// takes in two parameters, random and indexAt.
// random "randomizes" the index of the image in the array.
// and indexAt iterates through the elements lenght starting from 0.

function debugDisplay(random, indexAt) {
  const outputArr = [];
  random = Math.floor(Math.random() * memeIMGsrc.length);

  for (let i = 0; i < memeIMGsrc.length; i++) {
    indexAt += 1;
    outputArr.push(memeIMGsrc[i]);
    if (indexAt > outputArr.length) {
      break;
    } else {
      continue;
    }
  }
  if (outputArr[random] === outputArr.indexOf(random)) {
    outputArr.push(indexAt);
  }
  displayMeme.innerHTML = `<img src=${outputArr[
    random
  ].split()} id="display-meme"/>`; // prefer textContent over innerHTML.
  return memeArray;
}
