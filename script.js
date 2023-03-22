 myLibrary = [
	{
		title: 'Dune',
		author: 'Frank Herbert',
		pages: 350,
		read: true,
	},
	{
		title: 'A Game of Thrones',
		author: 'George R. R. Martin',
		pages: 700,
		read: false,
	},
	{
		title: 'The Chronicles od Narnia',
		author: 'C.S. Lewis',
		pages: 900,
		read: false,
	},
];

// create HTML library

function makeLibrary(numElem) {
	const tableUl = document.querySelector('.table');
	for (let i = numElem; i < myLibrary.length; i++) {
		const childLi = document.createElement('li');
		childLi.setAttribute('data-id', `${i}`);
		childLi.className = 'table-row';
		tableUl.appendChild(childLi);

		const titleDiv = document.createElement('div');
		titleDiv.textContent = myLibrary[i].title;
		titleDiv.className = 'col-1';
		childLi.appendChild(titleDiv);

		const authorDiv = document.createElement('div');
		authorDiv.textContent = myLibrary[i].author;
		authorDiv.className = 'col-2';
		childLi.appendChild(authorDiv);

		const pagesDiv = document.createElement('div');
		pagesDiv.textContent = myLibrary[i].pages;
		pagesDiv.className = 'col-3';
		childLi.appendChild(pagesDiv);

		//display read status
		const readDiv = document.createElement('div');
		// readDiv.textContent = myLibrary[i].read;
		readDiv.className = 'col-4';
		childLi.appendChild(readDiv);

		// read status button
		const readBtn = document.createElement('button');
		// create Html status button
		if (myLibrary[i].read) {
			readBtn.textContent = 'YES';
		} else {
			readBtn.textContent = 'NO';
		}
		// in future add this function on your Book prototype instance??
		// add toggle functionality
		readBtn.addEventListener('click', function() {
			if (myLibrary[i].read) {
				readBtn.textContent = 'NO';
				myLibrary[i].read = false;
			} else {
				readBtn.textContent = 'YES';
				myLibrary[i].read = true;
			}
		});
		readDiv.appendChild(readBtn);
	
		// create delete button container
		const deleteDiv = document.createElement('div');
		deleteDiv.className = 'col-5';
		childLi.appendChild(deleteDiv);

		//create delete Button
		const delBtn = document.createElement('button');
		delBtn.textContent = 'DELETE';
		delBtn.addEventListener('click', function () {
			const liToDelete = document.querySelector(`[data-id="${i}"]`);
			liToDelete.remove();
		});
		deleteDiv.appendChild(delBtn);

	}
}

// make initially HTML library

makeLibrary(0);
// console.log(document.querySelectorAll('.table-row'));

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	// this.info = () => `${title} by ${author}, ${pages}, ${read}`;
}

// add yo myLibrary with data from the form

function addBookToLibrary(event) {
	const userTitle = document.querySelector('#title');
	const userAuthor = document.querySelector('#author');
	const userPages = document.querySelector('#pages');
	const userRead = document.querySelector('#read');

	const newBook = new Book(
		userTitle.value,
		userAuthor.value,
		userPages.value,
		userRead.checked
	);

	myLibrary.push(newBook);
	makeLibrary(myLibrary.length - 1);
	toggleForm();


	event.preventDefault();
}

// submit button

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', addBookToLibrary, false);

// toggle btn

const addBookForm = document.querySelector('#form-library');

function toggleForm() {
	if (addBookForm.style.display === 'none') {
		addBookForm.style.display = 'initial';
	} else {
		addBookForm.style.display = 'none';
	}

}

const toggleBtn = document.querySelector('#form-toggle');

toggleBtn.addEventListener('click', toggleForm);

