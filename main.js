// containers
let cardContainer = document.querySelector(".card-container");
let dialog = document.querySelector("#inputs");

// inputs
let title = document.querySelector('#title')
let author = document.querySelector('#author')
let pages = document.querySelector('#pages')
let read = document.querySelector('#read')

//buttons
let saveBook = document.querySelector('#save-book')
let addBook = document.querySelector('#add-book-btn');

//Book array
const myLibrary = [];

//book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//function for adding books
function addBookToLibrary(title, author, pages, read) {

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

//Books


//Event listeners for buttons

addBook.addEventListener('click', () => {
    dialog.showModal();
});

console.log(myLibrary)

function bookArr(arr) {

    for (let i = 0; i < myLibrary.length; i++) {

        const card = document.createElement('div');

        card.innerHTML = `<div class="card" style="width: 18rem;" data-index-number="${i}">
  <div class="card-body">
    <h5 class="card-title">${arr[i].title}</h5>
    <p class="card-text">${arr[i].author}</p>
    <p class="card-text">${arr[i].pages}</p>
    <p class="card-text">${arr[i].read}</p>
    <button class="remove-btn btn btn-danger">Remove</button>
  </div>
</div>`
        cardContainer.appendChild(card);

        const removeBtn = document.querySelector('.remove-btn');
    
        removeBtn.addEventListener('click', ()=>{
            cardContainer.remove(card.dataset.indexNumber);
        });
    }
}
saveBook.addEventListener('click', (e) => {
    e.preventDefault()
    
    const book = new Book(title.value, author.value, pages.value, read.value);

    myLibrary.push(book)

    cardContainer.innerHTML = ''

    bookArr(myLibrary)

    title.value = '' 
    author.value = ''
    pages.value = ''
    read.value = ''
});

console.log(myLibrary)
bookArr(myLibrary);
