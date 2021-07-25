'use strict';

let form = document.getElementById('book-form');
let tableParent = document.getElementById('display-item');

let bookShopArray =[];

// build the constructor function:

function BookShop(name , pages, price ){
    this.name = name;
    this.pages = pages;
    this.price = price;
    bookShopArray.push(this);

}
 
// Create a table:

BookShop.prototype.renderBook = function(){
    let rowOne = document.createElement('tr');
    tableParent.appendChild(rowOne);

    let displayBookName = document.createElement('td');
    displayBookName.textContent = ` Book Name  ${this.name}`;

    let rowTwo = document.createElement('tr');
    tableParent.appendChild(rowTwo);

    let displayBookPrice= document.createElement('td');
    displayBookPrice.textContent = `Book Price ${this.price} `;

    let rowThree = document.createElement('tr');
    tableParent.appendChild(rowThree);

    let displayBookPages = document.createElement('td');
    displayBookPages.textContent = `Book Pages ${this.pages}`;

    rowOne.appendChild(displayBookName);
    rowTwo.appendChild(displayBookPrice);
    rowThree.appendChild(displayBookPages);
}

//local storage:

function storeData(){
localStorage.setItem("Book" , JSON.stringify(bookShopArray));

}
 function renderBookItem(){
     for (let index = 0; index < bookShopArray; index++) {

         let rowOne = document.createElement('tr');
         tableParent.appendChild(rowOne);

         let displayBookName = document.createElement('td');
         displayBookName.textContent = ` Book Name  ${this.name}`;
     

         let rowTwo = document.createElement('tr');
         tableParent.appendChild(rowTwo);

         let displayBookPrice= document.createElement('td');
         displayBookPrice.textContent = `Book Price ${this.price} `;

         let rowThree = document.createElement('tr');
    tableParent.appendChild(rowThree);

    let displayBookPages = document.createElement('td');
    displayBookPages.textContent = `Book Pages ${this.pages}`;

    rowOne.appendChild(displayBookName);
    rowTwo.appendChild(displayBookPrice);
    rowThree.appendChild(displayBookPages);
    
     }
 }

 function checkLs(){
     if (localStorage.getItem('Book')){
     bookShopArray = JSON.parse (localStorage.getItem('Book'));
     renderBookItem();
 }
 }

 function handlItem(event){
     event.preventDefault();

     let bookName =event.target.bookName.value;
     
     let bookPrice =event.target.bookPrice.value;
     let bookPages =event.target.bookPages.value; 
     let book = new BookShop(bookName , bookPages, bookPrice);
     book.renderBook();
     storeData();
 
 }

 form.addEventListener('submit', handlItem);
 

 checkLs();



