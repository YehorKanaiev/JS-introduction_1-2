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

/* ===== Task 13 ===== */

/* Local Storage */

let localInput = document.getElementById("task13__input-to-local-storage");
localInput.contentEditable = "true";
if (localStorage.getItem("task13-input")) {
    localInput.innerHTML = localStorage.getItem("task13-input");
}
localInput.addEventListener("input", addToLocal);

function addToLocal() {
    localStorage.setItem("task13-input", localInput.innerHTML);
}

/* Cookie */

let cookieInput = document.getElementById("task13__input-to-cookie");
cookieInput.contentEditable = "true";

getDataFromCookie();
function getDataFromCookie() {
    let cookie = document.cookie;
    cookie = cookie.split(";");
    for (let entry of cookie) {
        let entryCookie = entry.split("=");
        if (entryCookie[0] === "task13-input") {
            cookieInput.innerHTML = entryCookie[1];
            break;
        }
    }
}

cookieInput.addEventListener("input", addToCookie);

function addToCookie() {
    document.cookie = "task13-input=" + cookieInput.innerHTML;
}

/* Session Storage */

let sessionInput = document.getElementById("task13__input-to-session-storage");
sessionInput.contentEditable = "true";
if (sessionStorage.getItem("task13-input")) {
    sessionInput.innerHTML = sessionStorage.getItem("task13-input");
}
sessionInput.addEventListener("input", addToSession);

function addToSession() {
    sessionStorage.setItem("task13-input",sessionInput.innerHTML);
}

/* ===== Task 14 ===== */

let topButton = document.getElementById("topButton")

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        topButton.style.visibility = "visible";
    } else {
        topButton.style.visibility = "hidden";
    }
});

topButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

/* ===== Task 15 ===== */

let outsideBlock = document.getElementById("task15__outside");
let insideBlock = document.getElementById("task15__inside");
outsideBlock.addEventListener("click", () => {
    alert("Click on the outside block");
})
insideBlock.addEventListener("click", (event) => {
    alert("Click on the inside block");
    event.stopPropagation();
})

/* ===== Task 16 ===== */

let scrollButton = document.getElementById("task16__button");
scrollButton.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    let greyCover = document.createElement("div");
    greyCover.setAttribute("id","grey-cover");
    document.body.appendChild(greyCover);
    greyCover.addEventListener("click", () => {
        document.body.style.overflow = "visible";
        greyCover.style.display = "none";
    })
})

/* ===== Task 18 ===== */

const task18__button = document.getElementById("task18__button");
const task18__input = document.getElementById("task18__input");
const task18__dropArea = document.getElementById('task18__drop-field');
const task18__status = document.getElementById("task18__input-status");
const task18__defaultLabel = "no file(s) selected";

task18__status.innerHTML = task18__defaultLabel;
task18__button.addEventListener("click", () => {
    task18__input.click();
})

task18__input.addEventListener("change", changeInnerFiles)

task18__dropArea.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    task18__dropArea.style.background = "#00b000";
});

task18__dropArea.addEventListener('dragleave', () => {
    task18__dropArea.style.background = "#008000";
})

task18__dropArea.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    task18__input.files = event.dataTransfer.files;
    changeInnerFiles();
    task18__dropArea.style.background = "#008000";
});

function changeInnerFiles() {
    const fileNameList = Array.prototype.map.call(task18__input.files, (file) => {
        return file.name;
    })
    task18__status.innerHTML = fileNameList.join(", ") || task18__defaultLabel;
}








