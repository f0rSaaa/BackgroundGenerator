var cssPageLoad = document.getElementById("onLoadColor");
var css = document.getElementById("afterChangingColor");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var genRandom = document.getElementById("randomColor");

function setGradient() {
    console.log(color1.value)
    cssPageLoad.remove();
    body.style.background = "linear-gradient(to right,"+ color1.value +", " + color2.value + ")";

    css.textContent = body.style.background +";";

}

function getRandomColorNumberOne() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomColorNumberTwo() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomGradient() {
    console.log(color1.value)
    cssPageLoad.remove();
    body.style.background = "linear-gradient(to right,"+ getRandomColorNumberOne() +", " + getRandomColorNumberTwo() + ")";
    css.textContent = body.style.background +";";

}

genRandom.addEventListener("click", setRandomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);