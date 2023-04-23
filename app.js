// Define the book database
const bookDB = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", available: false },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", available: true },
    { id: 4, title: "1984", author: "George Orwell", available: true },
    { id: 5, title: "Animal Farm", author: "George Orwell", available: false },
    { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", available: true }
  ];
  
  // Get HTML elements
  const bookTable = document.querySelector('#book-table tbody');
  const searchBox = document.querySelector('#search-box');
  
  // Render the book database
  function renderBooks(books) {
    let html = '';
    for (let book of books) {
      let status = book.available ? 'Available' : 'Not Available';
      html += `<tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${status}</td>
                <td>
                  <button class="btn" onclick="toggleAvailability(${book.id})">${book.available ? 'Borrow' : 'Return'}</button>
                  <button class="btn" onclick="removeBook(${book.id})">Remove</button>
                </td>
              </tr>`;
    }
    bookTable.innerHTML = html;
  }
  
  // Toggle book availability
  function toggleAvailability(id) {
    for (let book of bookDB) {
      if (book.id === id) {
        book.available = !book.available;
        renderBooks(bookDB);
        break;
      }
    }
  }
  
  // Remove a book from the database
  function removeBook(id) {
    for (let i = 0; i < bookDB.length; i++) {
      if (bookDB[i].id === id) {
        bookDB.splice(i, 1);
        renderBooks(bookDB);
        break;
      }
    }
  }
  
  // Filter books by title or author
  function filterBooks() {
    let query = searchBox.value.toLowerCase();
    let filteredBooks = bookDB.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));
    renderBooks(filteredBooks);
  }
  
  // Initialize the app
  function init() {
    renderBooks(bookDB);
    searchBox.addEventListener('input', filterBooks);
  }
  
  // Start the app
  init();
    