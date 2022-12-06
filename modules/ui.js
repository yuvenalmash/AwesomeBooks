
export const addItemHtml = (book, index) => {
  const btnId = `removeBtn${index}` 
  const child = `
  <section class="book">
    <p>"${book.title}" by ${book.author}</p>
    <button id="${btnId}" onclick = "remove(${index})" class="deleteBtn" > Remove</button>
  </section>`;
  const parent = document.getElementById('books');
  parent.innerHTML += child;
};

export const clearListDiv = () => {
  const child = '';
  const parent = document.getElementById('books');
  parent.innerHTML = child;
};
