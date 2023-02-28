
let data = document.getElementById('data');
let documentText;
let taylorArray;
let emmaArray;
let ericaArray;
let brittanyArray;
let livArray;
let kennaArray;
let elyseArray;

$(window).on('load', function() {

    $.get('https://docs.google.com/document/d/1-ZLjKlGju7nlxuxJAsEApgp0dH5_m9vAv-3FbVbvmXs/edit?usp=sharing', null, function(text) {
        documentText = text;
        documentText = $(documentText).find('script');
    documentText = documentText.prevObject[57].innerText.slice(503, 4255) + '\\n' + documentText.prevObject[59].innerText.slice(46, 1420);
    console.log(documentText);
    })





})