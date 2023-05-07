const scrollbar = document.getElementById('scrollbar');
const thumb = document.getElementById('thumb');
const postext = document.getElementById('posnum');
const control = document.querySelector('.scrollcontrol');
const up = document.getElementById('up');
const down = document.getElementById('down');

let startPos = 0;
let startThumbPos = 0;
let scrollPos = 0;
let isCurrDragging = false;
const maxThumbPos = scrollbar.offsetHeight - thumb.offsetHeight - 40;

function updatePostext() {
    const thumbpos = thumb.offsetTop - 40;
    postext.textContent = thumbpos.toString();
}


function updateThumbPos() {
    const thumbPos = Math.min(maxThumbPos, Math.max(40, startThumbPos + (scrollPos - startPos)));
    thumb.style.top = `${thumbPos}px`;
}

function thumbdrag(event) {
    if (isCurrDragging) {
        scrollPos = event.clientY;
        updateThumbPos();
        updatePostext();
    }
}

function mouseup() {
    isCurrDragging = false;
}

function mousedown(event) {
    isCurrDragging = true;
    startPos = event.clientY;
    startThumbPos = thumb.offsetTop;
}


function moveUp() {
    if (thumb.offsetTop > 40) {
        thumb.style.top = `${thumb.offsetTop - 10}px`;
        updatePostext();
    }
}

function moveDown() {
    if (thumb.offsetTop < maxThumbPos) {
        thumb.style.top = `${thumb.offsetTop + 10}px`;
        updatePostext();
    }
}

up.addEventListener('click', moveUp);
down.addEventListener('click', moveDown);

thumb.addEventListener('mousedown', mousedown);
document.addEventListener('mousemove', thumbdrag);
document.addEventListener('mouseup', mouseup);

