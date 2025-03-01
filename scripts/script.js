// let hamburg = document.getElementById("ham-menu");
// let offScreenMenu = document.getElementById("off-screen-menu");


// hamburg.addEventListener("click", () => {
//     hamburg.classList.toggle('active');
// })

// Index Buttons
const startSession = document.querySelector('.start');
const todaysSessions = document.querySelector('.sessions');
const search = document.querySelector('.search');
const jump = document.querySelector('.jump');

startSession.addEventListener('click', () => {
    window.open("./newsession.html");
})

todaysSessions.addEventListener('click', () => {
    window.open("./currentsessions.html");
})

search.addEventListener('click', () => {
    // this will trigger a pop up search to find a specific client
})

jump.addEventListener('click', () => {
    // this will trigger a pop up calendar to jump to a date from the past
})