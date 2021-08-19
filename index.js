window.addEventListener('scroll', reveal)

//reveal contents on scroll

function reveal() {
    var reveal = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveal.length; ++i) {

        var winH = window.innerHeight;
        var top = reveal[i].getBoundingClientRect().top;
        var num = 150;
        //console.log(winH - top)
        if (num < winH - top) {

            reveal[i].classList.add('active');
        }
        else {

            reveal[i].classList.remove('active');
        }

    }
}

//To fetch project details from github repository
/*
const apiUrl = "https://api.github.com/users/santushtisharma10/search/"

fetch(apiUrl)
.then(res=>res.json())
.then(data=>console.log(data))
*/
var btn = document.getElementById("btn+")

btn.onclick = function() {

    document.body.classList.toggle("btn-")
    if(document.body.classList.contains("btn-")) {

        btn.innerHTML = "-"
    }
    else {

        btn.innerHTML = "+"
    }
}
//to change the background mode 
var icon = document.getElementById("icon")


icon.onclick = function () {

    
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {

        icon.src = "images/moon.png"
        github.src = "images/Github-Dark.png"
        
    }
    else {

       icon.src = "images/sun.png"
       github.src = "images/Github-Light.png"
    }
}

// self writing and deleting typing effect

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
        //console.log(curIndex, word);
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


//console.log("HEllo")

init()
function init() {

    var txt = document.querySelector('.text-effect');
    const wordList = JSON.parse(txt.getAttribute('data-words'));
    const wait = txt.getAttribute('data-wait');
    //console.log(wait);
    //console.log(txt, wordList)
    TypingEffect(txt, wordList, wait)
}

var mybutton = document.getElementById("moveTop");

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
console.log("sroll")
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  
  document.documentElement.scrollTop = 0;
}


//overlay effect for project cards
/*
function on() {

    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  */

//to be fixed
// achievements section content
// mobile view


// Fututre scope
// overlay effect on project cards



