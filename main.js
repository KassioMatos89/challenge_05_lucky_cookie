const getLuckyButton = document.querySelector("#getLucky")
const luckyBox = document.querySelector(".lucky-box")
const luckyBoxOpenned = document.querySelector(".openned-lucky-box")
const newCoockieButton = document.querySelector("#newCoockie")

getLuckyButton.addEventListener('click', toggleLuckyBox)
newCoockieButton.addEventListener('click', toggleLuckyBox)

function toggleLuckyBox () {
  luckyBox.classList.toggle('hide')
  luckyBoxOpenned.classList.toggle('hide')
}