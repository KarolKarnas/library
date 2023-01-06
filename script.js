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
		title: 'The Chronicles od Narnia',
		author: 'C.S. Lewis',
		pages: 900,
		read: 'not read yet',
	},
];

function makeLibrary() {
	let tableUl = document.querySelector('.table');
	for (let i = 0; i < myLibrary.length; i++) {
		let childLi = document.createElement('li');
		childLi.className = 'table-row';
		tableUl.appendChild(childLi);

		let titleDiv = document.createElement('div');
		titleDiv.textContent = myLibrary[i].title;
		titleDiv.className = 'col-1';
		childLi.appendChild(titleDiv);

		let authorDiv = document.createElement('div');
		authorDiv.textContent = myLibrary[i].author;
		authorDiv.className = 'col-2';
		childLi.appendChild(authorDiv);

		let pagesDiv = document.createElement('div');
		pagesDiv.textContent = myLibrary[i].pages;
		pagesDiv.className = 'col-3';
		childLi.appendChild(pagesDiv);

		let readDiv = document.createElement('div');
		readDiv.textContent = myLibrary[i].read;
		readDiv.className = 'col-3';
		childLi.appendChild(readDiv);

		// console.log(myLibrary[i]);
		// console.log(myLibrary[i].title);
		// console.log(tableUl);
	}
}

makeLibrary();

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
