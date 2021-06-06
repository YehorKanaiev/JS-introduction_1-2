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

function getUserInfo() {
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

/* =============== PART2 =============== */

// initial data of cities
document.getElementById("part2__incoming-csv").innerHTML = "44.38,34.33,Алушта,31440,\n" +
    "49.46,30.17,Біла Церква,200131,\n" +
    "49.54,28.49,Бердичів,87575,\n" +
    "46.49,36.58,Бердянськ,121692,\n" +
    "49.15,28.41,Вінниця,356665,\n" +
    "#45.40,34.29,Джанкой,43343,\n" +
    "48.28,34.47,Камянське,255841,\n" +
    "48.31,35.08,Дніпро,1065008,\n" +
    "#48.03,37.47,Донецьк,1016194,\n" +
    "50.18,28.49,Житомир,284236,\n" +
    "49.04,28.12,Жмеринка,37349,\n" +
    "47.53,35.23,Запоріжжя,815256,\n" +
    "#\n" +
    "45.11,33.28,Євпаторія,105915,\n" +
    "48.56,24.53,Івано-Франківськ,218359,\n" +
    "48.43,26.45,Камянець-Подільський,99610,\n" +
    "#45.20,36.38,Керч,157007,\n" +
    "50.27,30.30,Київ,2611327,\n" +
    "48.31,32.21,Кропивницький,254103,\n" +
    "49.07,33.35,Кременчук,234073,\n" +
    "47.54,33.33,Кривий Ріг,668980,\n" +
    "#48.36,39.22,Луганськ,463097,\n" +
    "50.49,25.26,Луцьк,208816,\n" +
    "49.53,24.16,Львів,732818,\n" +
    "47.07,37.40,Маріуполь,492176,\n" +
    "46.53,35.25,Мелітополь,160657,\n" +
    "46.58,32.12,Миколаїв,514136,\n" +
    "#48.26,22.45,Мукачеве,82346,\n" +
    "47.37,34.30,Нікополь,136280,\n" +
    "46.29,30.44,Одеса,1029049,\n" +
    "48.33,35.57,Павлоград,118816,\n" +
    "49.37,34.37,Полтава,317998,\n" +
    "50.39,26.26,Рівне,248813,\n" +
    "49.33,23.23,Самбір,36556,\n" +
    "44.29,33.43,Севастополь,342451,\n" +
    "#44.55,34.13,Сімферополь,343644,\n" +
    "50.58,34.52,Суми,293141,\n" +
    "49.37,25.47,Тернопіль,227755,\n" +
    "48.40,22.30,Ужгород,117317,\n" +
    "50.05,30.03,Фастів,51976,\n" +
    "45.02,35.31,Феодосія,74669,\n" +
    "50.02,36.14,Харків,1470902,\n" +
    "46.40,32.42,Херсон,328360,\n" +
    "49.26,27.06,Хмельницький,253994,\n" +
    "48.11,23.40,Хуст,29080,\n" +
    "49.27,32.03,Черкаси,295414,\n" +
    "51.29,31.22,Чернігів,304994,\n" +
    "48.16,26.07,Чернівці,240621,\n" +
    "#44.26,34.19,Ялта,81654,";


function getCitiesData() {
    const csvData = document.getElementById("part2__incoming-csv").value;
    let regexp = /#/g; // symbol for mark a commentaries
    let cities = csvData.split("\n")
        .map((item) => {
            return item.split(",").slice(0,4);
        })
        .filter((item) => {
            let isValid = true;
            item.map((word) => {
                if (word.match(regexp)) {
                    isValid = false;
                }
                return true;
            })
            return isValid;
        })
        .map((row) => {
            return {
                x: row[0],
                y: row[1],
                name: row[2],
                population: row[3],
            }
        })
        .sort((a, b) => b.population - a.population)
        .slice(0,10)
        .reduce((previousValue, item, index) => {
            previousValue[item.name] = {
                population: item.population,
                rating: index + 1,
            };
            return previousValue;
        }, {})
    return (text) => {
        Object.keys(cities).map((city) => {
            let cityData = cities[city];
            text = text.replaceAll(city, `${city}(${cityData.rating} место в ТОП-10 самых крупных городов Украины, население ${cityData.population} человек)`)
        })
         return text;
    }
}

let parsingFunc;
document.getElementById("part2__set-csv").addEventListener("click", () => {
    parsingFunc = getCitiesData();
    alert("your .csv is accepted");
})


document.getElementById("part2__add-info").addEventListener("click", function () {
    let userText = document.getElementById("part2__incoming-data").value;
    if (parsingFunc === undefined) {
        alert(".csv is not accepted");
        return;
    }
    document.getElementById("part2__outgoing-data").innerHTML = parsingFunc(userText);
})

