const booklistPath = 'https://miahenri.github.io/vincent-website/books.json'; // Umbenennen des JSON-Datei-Pfads
let currentData = null;

document.addEventListener('DOMContentLoaded', function () {
    initBooks();
});

function initBooks() {
    fetch(booklistPath)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Überprüfe, ob die Daten korrekt sind
            if (data.books && Array.isArray(data.books)) {
                currentData = data;
                renderBooks(data.books); // Übergebe das Array der Bücher
            } else {
                console.error("Books Array nicht gefunden");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function renderBooks(books) {
    const booklistElement = document.querySelector('[data-js-generate-booklist]'); // DOM-Referenz, umbenannt
    if (!booklistElement) {
        console.error("booklistElement nicht gefunden");
        return;
    }
    
    // Erstelle die HTML-Elemente für die Bücher
    const items = books.map(function(book) {
        return `<li class="book-item">
                    <img src="./_data/content/covers/${book.teaserImg}" alt="${book.title}" />
                    <p>${book.title}</p>
                    <a href="#">IN DEN WARENKORB</a>
                </li>`;
    }).join('');
    
    booklistElement.innerHTML = items; // Füge die Elemente dem DOM hinzu
    console.log("Bücher gerendert:", items);
}
