let myLibrary = [];



function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = () => `${title} by ${author}, ${pages}, ${read}`;
}



function addBookToLibrary() {
  // do stuff here
}



const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

console.log(theHobbit.info());

console.log(theHobbit.constructor);
