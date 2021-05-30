'use strict'

/* ===== Task 1 ==== */

function hideCSS() {
    let square  = document.getElementById('task1__square');
    square.style.display = "none";
}

function hideJs() {
    let square  = document.getElementById('task1__square');
    square.parentElement.removeChild(square);
}

function hideCssAndJs() {
    let square  = document.getElementById('task1__square');
    square.classList.add('hidden');
}

/* ===== Task 2 ===== */

function toggleVisibilityJs() {
    let square = document.getElementById('task2__square');
    square.classList.toggle("hidden")
}

/* ===== Task 3 ===== */

document.getElementById("task3__button").addEventListener("click", toggleSquaresVisibility);

function toggleSquaresVisibility() {
    let squares = document.getElementsByClassName("task3__square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.toggle("hidden");
    }
}

/* ===== Task 4 ===== */

document.getElementById("task4__button").addEventListener("click",hideWithInput);

function hideWithInput() {
    let inputValue = document.getElementById("task4__selector-field").value;
    let elements = document.querySelectorAll(inputValue);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("hidden");
    }
}

/* ===== Task 5 ===== */

document.getElementById("task5__square").addEventListener("click",task5HelloHandler)

function task5HelloHandler() {
    alert("Hello");
    let square = document.getElementById("task5__square")
    square.removeEventListener("click",task5HelloHandler);
    square.addEventListener("click", task5HideHandler)

}

function task5HideHandler() {
    document.getElementById("task5__square").style.display = "none";
}

/* ===== Task 6 ===== */

function showTask6() {
    document.getElementById("task6__square").style.opacity = "1";
}

function hideTask6() {
    document.getElementById("task6__square").style.opacity = "0";
}

/* ===== Task 7 ===== */

document.getElementById("task7__field").addEventListener("focus",inputOnFocus)
document.getElementById("task7__field").addEventListener("input",inputInTask7)

function inputOnFocus() {
    let square = document.getElementById("task7__rectangle");
    square.style.display = "inline-block";
}

function inputInTask7() {
    let square = document.getElementById("task7__rectangle");
    square.style.display = "none";
}

/* ===== Task 8 ===== */

document.getElementById("task8__button").addEventListener("click",showImage);

function showImage() {
    let imageURL = document.getElementById("task8__field").value;
    let image = createImage(imageURL);
    document.getElementById("task8__images").appendChild(image);
}

function createImage(url) {
    let image = document.createElement("img");
    image.setAttribute("src", url);
    return image;
}

/* ===== Task 9 ===== */

document.getElementById("task9__button").addEventListener("click",showImages);

function showImages() {
    let URLs = document.getElementById("task9__field").value;
    URLs = URLs.split("\n");
    for (let i = 0; i < URLs.length; i++) {
        let image = createImage(URLs[i]);
        document.getElementById("task9__images").appendChild(image);
    }
}

/* ===== Task 10 ===== */

document.body.addEventListener("mousemove",changeCoordinates)

function  changeCoordinates(event) {
    let label = document.getElementById("nav__coordinates");
    label.innerHTML = `Cursor coordinates: X:${event.pageX}, Y:${event.pageY}.`;
}

/* ===== Task 11,12 ===== */

window.addEventListener('load', getUserInfo);

function getUserInfo(event) {
    if (window.navigator) {
        // get language
        let lang = document.getElementById("nav__language");
        lang.innerHTML = "lang: " + navigator.language.slice(0,2);

        //get location
        navigator.geolocation.getCurrentPosition((position => {
            let location = document.getElementById("nav__location");
            location.innerHTML = `Ш: ${position.coords.latitude}, Д: ${position.coords.longitude}`
        }));
    }
}