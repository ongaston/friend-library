
let data = document.getElementById('data');
let documentText;

class Person {
    constructor(name) {
        this.name = name;
        this.bookshelf = name + "'s Bookshelf";
        this.fiction = [];
        this.nonfiction = [];
        this.books = [this.fiction, this.nonfiction];
    }

    addBook(book) {
        this.books.push(book);
    }
}

let taylor = new Person("Taylor");
let erica = new Person("Erica");
let brittany = new Person("Brittany");
let emma = new Person("Emma");
let liv = new Person("Liv");
let haley = new Person("Haley");
let kenna = new Person("Kenna");
let elyse = new Person("Elyse");

let peopleArray = [taylor, erica, emma, liv, brittany, haley, kenna, elyse];

$(window).on('load', function() {

    $.get('https://docs.google.com/document/d/1-ZLjKlGju7nlxuxJAsEApgp0dH5_m9vAv-3FbVbvmXs/edit?usp=sharing', null, function(text) {
        documentText = text;
        documentText = $(documentText).find('script');
    documentText = documentText.prevObject[57].innerText.slice(503, 4255) + '\\n' + documentText.prevObject[59].innerText.slice(46, 1420);
        //console.log(documentText)
    for (let i = 0; i < peopleArray.length; i++) {  

        let index1 = documentText.indexOf(peopleArray[i].name);
        //console.log(index1)
        let index2 = documentText.indexOf("Bookshelf", index1 + 30);
        //console.log(index2)
        //console.log(documentText.slice(index1, index2 - 10))

    } 

    })





})