
let myLibrary = [];
function book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return this.info = this.title + "by " + this.name + "," + this.pages + " pages and" + this.read


}




function addBookToLibrary() {
    let title = document.querySelector(".bookTitle").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pagesNumber").value;
    let read = document.querySelector(".read").value;
    let myBook = new book(title, author, pages, read);
    myLibrary.push(myBook);
    closeForm()
    
    createCard()


    //return  display.textContent+= myBook.info ;

}
//let display = document.querySelector('.display')
//display.textContent='';




function createCard() {
    
        let card = document.createElement('div')
        let cardText = document.createElement('p')
        cardContainer.appendChild(card)
        card.appendChild(cardText)
       card.classList.add('.card')
    
     cardText.textContent += myLibrary[myLibrary.length-1].title
}


let cardContainer = document.querySelector('.cardContainer')
let addBookBtn = document.querySelector('.addBook')
addBookBtn.addEventListener("click", addBookToLibrary)
document.querySelector('.cancel').addEventListener('click',closeForm)
document.querySelector('.newBook').addEventListener('click',openForm)

function openForm(){
    
    document.querySelector(".myForm").style.display="block"
    
}

function closeForm(){
    document.querySelector(".myForm").style.display="none"
}

let requiredInputs = document.querySelectorAll("[required]");

addBookBtn.disabled = true;

for(let i = 0; i < requiredInputs.length; i++){
requiredInputs[i].addEventListener("input", buttonState)
};

function buttonState() {
  if (requiredInputs.value === "") {
    addBookBtn.disabled = true;
  } else {
    addBookBtn.disabled = false;
  }
}
