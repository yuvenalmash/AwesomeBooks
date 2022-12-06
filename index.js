import { setLuxonTime } from "./modules/setTime.js";
import { Book } from "./modules/book.js";
import { BookStorage } from "./modules/bookStorage.js";
import { showList, showAddBook, showContact } from "./modules/navigation.js"
import { addItemHtml, clearListDiv } from "./modules/ui.js";

// list books
const listBooks = () => {
  clearListDiv();
  let books = JSON.parse(localStorage.getItem('allEntries'));
  if (books == null) books = [];
  for (let i = 0; i < books.length; i += 1) {
    addItemHtml(books[i], i);
  }
};

// add books
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const newTitle = document.getElementById('addTitleInput').value;
  const newAuthor = document.getElementById('addAuthorInput').value;
  const newBook = new Book(newTitle, newAuthor);
  const storage = new BookStorage();
  storage.addBook(newBook);
  listBooks();
  document.getElementById('addTitleInput').value = '';
  document.getElementById('addAuthorInput').value = '';
});

// remove books
const remove = (index) => {
  const storage = new BookStorage();
  storage.removeBook(index);
  listBooks();
};

window.remove = remove

setInterval(setLuxonTime, 1000);
document.querySelector('#showListBtn').addEventListener('click', showList);
document.querySelector('#addNewBtn').addEventListener('click', showAddBook);
document.querySelector('#contactBtn').addEventListener('click', showContact);
showList();
listBooks();
