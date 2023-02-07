var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'black';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;

    if (scroll < 1250) {
        // mainpage
        body.style.backgroundColor = 'black';
         body.style.transitionDuration = '2s'
    } else if (scroll >= 1250 && scroll < 2000) {
        // page2
        body.style.backgroundColor = '#238c2a'
    } else if (scroll >= 2000 && scroll < 3400) {
        // page3
       
        body.style.backgroundColor = 'black';
        body.style.transitionDuration = '2s'
    } else if (scroll >= 3400 && scroll < 4000) {
        // page4
        body.style.backgroundColor = '#895C06';
    
    } else {
        // black
        body.style.backgroundColor = 'black';
    }
    
}


function myFunction(x) {
if (x.matches) { // If media query matches
window.onscroll = function (event) {
    var scroll = window.pageYOffset;

    if (scroll < 950) {
        // mainpage
        body.style.backgroundColor = 'black';
         body.style.transitionDuration = '2s'
    } else if (scroll >= 300 && scroll < 1800) {
        // yellow
        body.style.backgroundColor = '#238c2a'
    } else if (scroll >= 600 && scroll < 1200) {
        // blue
       
        body.style.backgroundColor = 'black';
    } else if (scroll >= 1200 && scroll < 1800) {
        // orange
        body.style.backgroundColor = 'black';
    } else if (scroll >= 1800 && scroll < 3000) {
        // red
        body.style.backgroundColor = 'black';
    } else {
        // purple
        body.style.backgroundColor = 'black';
    }
    
}
} else {

}
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes