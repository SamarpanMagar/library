// const myLibrary = [];

// function Book (title, author, pages, status) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status;
// }

// function addBookToLibrary () {
    
// }


// Form 
let semiAddBookButton = document.querySelector('.semi');
semiAddBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    hideOverlay();
})


// Overlay and modals
let preAddBookButton = document.querySelector('.pre');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

preAddBookButton.addEventListener('click', showOverlay);
overlay.addEventListener('click', hideOverlay);

modal.addEventListener('click', (e) => {
    e.stopPropagation();
})

function hideOverlay () {
    overlay.style.visibility = `hidden`;
}
function showOverlay () {
    overlay.style.visibility = `visible`;
}
