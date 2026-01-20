const imgElement = document.getElementById("image");
const saturationButton = document.getElementById("saturation");
const blurButton = document.getElementById("blur");
const resetButton = document.getElementById("something");
const rotateButton = document.getElementById("rotate");

function saturationButtonClicked() {
    imgElement.classList.toggle("saturation");
}
function blurButtonClicked() {
    imgElement.classList.toggle("blur");
}
function rotateButtonClicked() {
    imgElement.classList.toggle("rotate");
}
function resetButtonClicked() {
    imgElement.classList.remove("saturation");
    imgElement.classList.remove("blur");
    imgElement.classList.remove("rotate");
}
saturationButton.addEventListener("click", saturationButtonClicked);
blurButton.addEventListener("click", blurButtonClicked);
resetButton.addEventListener("click", resetButtonClicked);
rotateButton.addEventListener("click", rotateButtonClicked);