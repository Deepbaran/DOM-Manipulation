/****************************************************************************
 * DOMContentLoaded Event
 * **************************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  // console.log(document);

  /****************************************************************************
   * Grab elements in the document object
   * **************************************************************************/
  /*
// By element ID
const pageBanner = document.getElementById('page-banner');
console.log(pageBanner);

const bookList = document.getElementById('book-list');
console.log(bookList);

// By class name
const titles = document.getElementsByClassName('title'); // titles is a HTMLCollection and not an array
console.log(titles);
console.log(titles[0]); // first element of the HTMLCollection, titles

// By Tag name
const lis = document.getElementsByTagName('li'); // lis is a HTMLCollection and not an array
console.log(lis);
console.log(titles[0]); // first element of the HTMLCollection, lis

// Cycle through all title elements or HTMLCollection
// Method 1:
for (let i = 0; i < titles.length; i++) {
  console.log(titles[i]);
}

// Method 2:
console.log(Array.isArray(titles)); // false
console.log(Array.isArray(Array.from(titles))); // true

Array.from(titles).forEach(title => { // Array.from() will turn the object into an array
  console.log(title);
});

// Pass any CSS selector to grab the element(s)
const wrap = document.querySelector('#wrapper');
console.log(wrap);

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// Element with class name 'name', in the 2nd li child in the element with ID 'book-list'
console.log(wmf);

const books = document.querySelectorAll('#book-list li .name'); // Returns a NodeList (a collection) with all the quesried elements
// Every element with class 'name' inside li inside ID 'book-list'
// If only quesrySelector was used here then, only the first element of the NodeList would have been returned
console.log(books);

// querySelector() -> returns only one / first element that matches the query
// querySelectorAll() -> returns all elements that matches the query. Returns in collection form (NodeList) even if there is only one element to return.

// Cycle through books collection
books.forEach(book => console.log(book)); // unlike HTMLCollection, we can directly use forEach on NodeList

// HTMLCollection -> convert it to an array using the Array.from() method to use forEach
// NodeList -> Can directly use forEach
*/

  /****************************************************************************
   * Editing HTML & Text
   * **************************************************************************/
  /*
const books = document.querySelectorAll('#book-list li .name');

// textContent
books.forEach(book => {
  book.textContent += ' (book title)';
});

const bookList = document.querySelector('#book-list');
// innerHTML
// bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>'; // Append HTML
*/

  /****************************************************************************
   * DOM NODES
   * **************************************************************************/
  /*
const banner = document.querySelector('#page-banner');
console.log('#page-banner node type is: ', banner.nodeType);
console.log('#page-banner node name is: ', banner.nodeName);
console.log('#page-banner has child nodes: ', banner.hasChildNodes());

// Clone a node
const clonedBanner = banner.cloneNode(true); // passing true means all the child nodes are also cloned.
console.log(clonedBanner);
*/

  /****************************************************************************
   * Traversing the DOM
   * **************************************************************************/
  /*
const bookList = document.querySelector('#book-list');

// Traverse to parent element/node from child element/node
//Method 1:
console.log('the parent node is: ', bookList.parentNode);

//Method 2:
console.log('the parent element is: ', bookList.parentElement);
console.log(
  'the parent element of parent element is: ',
  bookList.parentElement.parentElement
);

// Traverse to children element/node from parent element/node
console.log(bookList.childNodes); // Line breaks are grabbed (text nodes are grabbed which has the line break element). This gives the child node.
console.log(bookList.children); // Line breaks are not grabbed (text nodes are not grabbed which has the line break element). This gives the child element.
// Nodes have line breaks but elements don't

// Traverse to Next Sibling
console.log('book-list next sibling is: ', bookList.nextSibling); // Returns the next sibling node (with line break)
console.log('book-list next sibling is: ', bookList.nextElementSibling); // Returns the next sibling element (without line break)

// Traverse to Previous Sibling
console.log('book-list previous sibling is: ', bookList.previousSibling); // Returns the previous sibling node (with line break)
console.log('book-list previous sibling is: ', bookList.previousElementSibling); // Returns the previous sibling element (without line break)

// Complex quesries
bookList.previousElementSibling.querySelector('p').innerHTML +=
  '<br /> Too cool for everyone elese!';
// querySelector will search for the element inside the previous sibling element of bookList
*/

  /****************************************************************************
   * DOM EVENTS / REMOVING CONTENT
   * **************************************************************************/
  // All the DOM Events: 'https://www.w3schools.com/jsref/dom_obj_event.asp'
  /*
// const h2 = document.querySelector('#book-list h2');
// h2.addEventListener('click', e => {
//   console.log(e.target); // target tells us which element, the eventListener is attached to
//   console.log(e); // e tells us about the event
// });

const deleteBtns = document.querySelectorAll('#book-list .delete');
deleteBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const li = e.target.parentElement;
    const ul = li.parentElement;
    ul.removeChild(li);
  });
});
// A drawback to this model is that any delete button of newly created li element will not have this eventListener associated with it.
// Solution to this drawback is to use Event bubbling

const link = document.querySelector('#page-banner a');
link.addEventListener('click', e => {
  e.preventDefault();
  console.log('navigation to:', e.target.textContent, 'was prevented');
});
*/

  /****************************************************************************
   * Event Bubbling
   * **************************************************************************/

  const list = document.querySelector('#book-list ul');

  // delete books
  list.addEventListener('click', e => {
    if (e.target.className === 'delete') {
      // if the target clicked has the class name 'delete' then proceed
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  });
  // Now all delete buttons of the li elements including the newly added li elements will act as expected

  /****************************************************************************
   * Interacting with Forms
   * **************************************************************************/

  // document.forms; // Gives collection of the forms in the document object

  // Methods to grab a particular form:
  // 1. document.forms[index]
  // 2. document.form[ID]

  // add books
  const addForm = document.forms['add-book'];
  addForm.addEventListener('submit', e => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value; // value of the text type input tag inside the addForm element

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    bookName.classList.add('name'); // bookName.className = 'name';
    deleteBtn.classList.add('delete'); // deleteBtn.className = 'delete';

    // add styles
    bookName.style.color = 'purple';

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.append(li);
  });

  /****************************************************************************
   * Attributes
   * **************************************************************************/
  /*
const book = document.querySelector('li:first-child .name');
book.getAttribute('class');
book.getAttribute('href');
book.setAttribute('class', 'name-2');
book.hasAttribute('class');
book.removeAttribute('class');
*/

  /****************************************************************************
   * Checkboxes & Change Events
   * **************************************************************************/

  // hide books
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', e => {
    if (hideBox.checked) {
      list.style.display = 'none'; // hides the elements
    } else {
      list.style.display = 'initial'; // initial or block both works
    }
  });

  /****************************************************************************
   * Custom Search Filter
   * **************************************************************************/

  // filter books
  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', e => {
    const term = e.target.value.toLowerCase(); // here target is the input field
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(book => {
      const title = book.firstElementChild.textContent.toLowerCase();
      if (title.indexOf(term) === -1) {
        // If the term string is not present in any index of title string
        book.style.display = 'none';
      } else {
        book.style.display = 'block';
      }
    });
  });

  /****************************************************************************
   * Tabbed Content
   * **************************************************************************/

  // tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', e => {
    if (e.target.tagName == 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.target);
      // dataset is the data attribute in the HTML tag and target is for target in data-target
      // For data-bean attribute it would have been, dataset.bean
      Array.from(panels).forEach(panel => {
        if (panel == targetPanel) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    }
  });
});
