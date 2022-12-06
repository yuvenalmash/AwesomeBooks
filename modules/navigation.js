export const showList = () => {
  document.getElementById('listBooks').style.display = 'block';
  document.getElementById('addBook').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'none';
};

export const showAddBook = () => {
  document.getElementById('listBooks').style.display = 'none';
  document.getElementById('addBook').style.display = 'block';
  document.getElementById('contactInfo').style.display = 'none';
};

export const showContact = () => {
  document.getElementById('listBooks').style.display = 'none';
  document.getElementById('addBook').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'block';
};
