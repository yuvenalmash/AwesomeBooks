export default class BookStorage {
  addBook = (newBook) => {
    let books = JSON.parse(localStorage.getItem('allEntries'));
    if (books == null) books = [];
    localStorage.setItem('entry', JSON.stringify(newBook));
    books.push(newBook);
    localStorage.setItem('allEntries', JSON.stringify(books));
  }

  removeBook = (index) => {
    const books = JSON.parse(localStorage.getItem('allEntries'));
    books.splice(index, 1);
    localStorage.setItem('allEntries', JSON.stringify(books));
  }
}