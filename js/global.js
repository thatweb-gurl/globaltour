let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let video1 = document.getElementById('video1');
let video2 = document.getElementById('video2');
let video3 = document.getElementById('video3');
let video4 = document.getElementById('video4');

function imgTransition(){
    video1.play();
    video1.style.opacity=1
}

video1.onended = function(){
    video2.play();
    video1.style.opacity=0;
    video2.style.opacity=1;
}
video2.onended = function(){
    video3.play();
    video2.style.opacity=0;
    video3.style.opacity=1;
}
video3.onended = function(){
    video4.play();
    video3.style.opacity=0;
    video4.style.opacity=1;
}
video4.onended = function(){
   
    video4.style.opacity=0;
    video1.style.opacity=1;
    window.setTimeout(imgTransition, 5);
}

function myFunction() {
    let dots = document.getElementById('dots');
    let moreText = document.getElementById('more');
    let btnText = document.getElementById('btn');

    if (dots.style.display==='none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Read More';
        moreText.style.display = 'none'
    } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Read Less';
        moreText.style.display = 'inline';
    }
}