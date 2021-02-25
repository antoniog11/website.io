
var nav = document.getElementsByTagName('nav')[0]

function setLight(){
    document.getElementsByTagName('nav')[0].classList.add('navbar-light')
    document.getElementsByTagName('nav')[0].classList.add('bg-light')
}

function setDark(){
    document.getElementsByTagName('nav')[0].classList.add('navbar-dark')
    document.getElementsByTagName('nav')[0].classList.add('bg-dark')
}

function setTransparent(){
    document.getElementsByTagName('nav')[0].classList.remove('navbar-light')
    document.getElementsByTagName('nav')[0].classList.remove('bg-light')
    document.getElementsByTagName('nav')[0].style.background = none
    
}

function checkPosition(){
    if(window.pageYOffset >= 400){
        setLight()
    } else{
        setTransparent()
    }
}


var colum = document.getElementById("three_column")

window.addEventListener("scroll",checkPosition)


