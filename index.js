window.addEventListener('scroll', reveal) 

function reveal() {
var reveal = document.querySelectorAll('.reveal')

for(var i = 0; i < reveal.length; ++i) {

    var winH = window.innerHeight;
    var top = reveal[i].getBoundingClientRect().top;
    var num = 150;
    console.log(winH-top)
    if(num < winH - top) {

        reveal[i].classList.add('active');
    }
    else {

        reveal[i].classList.remove('active');
    }

}
}

//to change the mode 
var icon = document.getElementById("icon")

icon.onclick = function() {

    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {

        icon.src = "images/sun.png"
    }
    else {

        icon.src = "images/moon.png"
    }
}

function TypingEffect(query, wordList, wait) {
    wait = parseInt(wait)
    let text = "";
    let index = 0;
    let delVal = false;
    let speed = 500;

    type();
    function type() {

        let curIndex = index % wordList.length;
        let word = wordList[curIndex];
        console.log(curIndex, word);
        if (delVal) {

            text = word.substring(0, text.length - 1);
        }
        else {

            text = word.substring(0, text.length + 1);
        }
        //console.log(word)
        query.innerHTML = text;
        speed = 500
        if (delVal) {

            speed /= 2;
        }

        if (!delVal && text === word) {

            delVal = true;
            speed = wait;
        }
        else if (delVal && text === "") {

            delVal = false;
            index++;
        }

        setTimeout(() => type(), speed);
    }

}


console.log("HEllo")

init()
function init() {

    var txt = document.querySelector('.text-effect');
    const wordList = JSON.parse(txt.getAttribute('data-words'));
    const wait = txt.getAttribute('data-wait');
    console.log(wait);
    console.log(txt, wordList)
    TypingEffect(txt, wordList, wait)
}

// Works to be done

// + sign to show navbar content
// popup window for project
// create a toggle switch for background mode []
// complete the whole page


