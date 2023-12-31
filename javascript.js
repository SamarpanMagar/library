const whole = (() => {
    // Library Array
    const myLibrary = [];

    // Book constructor
    class Book {
        constructor (title, author, pages, status) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            if (status == true) {
                this.status = `Read`;
            }
            else {
                this.status = `Not Read`;
            }
        }
    }

    // Form 
    let semiAddBookButton = document.querySelector('.semi');
    semiAddBookButton.addEventListener("click", (e) => {
        e.preventDefault();
        hideOverlay();

        addBookToLibrary();
        renderLibrary();
    })

    // Add book to library
    function addBookToLibrary () {
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let status = document.querySelector('#status').checked;

        let book = new Book (title, author, pages, status);
        myLibrary.push(book);
    }

    // Render Library 
    function renderLibrary () {
        let container = document.querySelector('.container');
        container.innerHTML = ``;

        let bookNumber = 1;
        for (let i = 0 ; i < myLibrary.length; i++) {
            let book = myLibrary[i];

            let newBook = document.createElement('div');
            newBook.classList.add('book');

            if (book.status == `Read`) {
                newBook.classList.add('read');
            }
            else {
                newBook.classList.add('notread');
            }

            newBook.dataset.bookIndex = `${i}`;

            newBook.innerHTML = `   
            <div class="bookTop">
                <div class="heading">Book${bookNumber}</div>
                <div class="cross" data-index="${bookNumber-1}">X</div>
            </div>       
            <div class="item">
                <div class="itemHeading">Title:</div>
                <div class="title">${book.title}</div>
            </div>
            <div class="item">
                <div class="itemHeading">Author:</div>
                <div class="author">${book.author}</div>
            </div>
            <div class="item">
                <div class="itemHeading">Pages:</div>
                <div class="pages">${book.pages}</div>
            </div>
            <div class="item">
                <div class="itemHeading">Status:</div>
                <div class="title">${book.status}</div>
            </div>
        `
            container.appendChild(newBook);

            newBook.addEventListener("click", (e) => {
                let index = e.target.dataset.bookIndex;
                if (index == undefined) {
                    index = e.target.parentElement.dataset.bookIndex;
                };
                if (index == undefined) {
                    index = e.target.parentElement.parentElement.dataset.bookIndex;
                };

                outer: if (index == undefined) {
                }
                else {
                    if (myLibrary[index] == undefined) {
                        break outer;
                    }

                    if (myLibrary[index].status == `Read`) {
                        myLibrary[index].status = `Not Read`;
                    }
                    else {
                        myLibrary[index].status = `Read`;
                    }
                }
                
                renderLibrary();
            })

            bookNumber++;
        }

        addRemoveBook();
    }

    // Remove listener 
    function addRemoveBook () {
        let crosses = document.querySelectorAll('.cross');
        for (cross of crosses) {
            cross.addEventListener('click', (e) => {
                let index = (e.target.dataset.index);
                myLibrary.splice(index, 1);
                renderLibrary();
            })
        }
    }

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

})();