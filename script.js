let myLibrary = [
	{
		title: 'Dune',
		author: 'Frank Herbert',
		pages: 350,
		read: 'read',
	},
	{
		title: 'A Game of Thrones',
		author: 'George R. R. Martin',
		pages: 700,
		read: 'not read yet',
	},
	{
		title: 'C.S. Lewis',
		author: 'The Chronicles od Narnia',
		pages: 900,
		read: 'not read yet',
	},
	{
		title: '',
		author: '',
		pages: 0,
		read: '',
	},
];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	// this.info = () => `${title} by ${author}, ${pages}, ${read}`;
}

function addBookToLibrary(event) {
	let userTitle = document.querySelector('#title');
	let userAuthor = document.querySelector('#author');
	let userPages = document.querySelector('#pages');
	let userRead = document.querySelector('#read');

	console.log(
		userTitle.value,
		userAuthor.value,
		userPages.value,
		userRead.value
	);

	let newBook = new Book(
		userTitle.value,
		userAuthor.value,
		userPages.value,
		userRead.value
	);

	myLibrary.push(newBook);
	console.log(newBook);
	console.log(myLibrary);

	event.preventDefault();
}

let submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', addBookToLibrary, false);

// addBookToLibrary();

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

// console.log(theHobbit.info());

// console.log(theHobbit.constructor);

// console.log(theHobbit);
