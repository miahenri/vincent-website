const booklist = './books.json';
let currentData = null;

document.addEventListener('DOMContentLoaded', function () {
    initBooks();
})

function initBooks() {
    const responsePromise = fetch(booklist)
    responsePromise.then(function(response) {
        const dataPromise = response.json();
        dataPromise.then(function(data) {
            currentData = data;
            renderBooks(data.books);
        });
    });
}

function renderBooks(books) {
    const booklist = document.querySelector('[data-js-generate-booklist]');
    const items = booklist.map(function(book) {
        return `<li class="book-item">
                <img src="./_data/content/covers/${book.teaserImg}"/>
                <p>${book.title}</p>
                <a href="#">IN DEN WARENKORB</a>
            </li>`;
    }).join('');
    booklist.innerHTML = items;
    console.log(booklist);
}