var dataContainer = document.querySelector('.bookList');
var starter = document.querySelector('.starter');


starter.addEventListener('click', function() {
    var mainRequest = new XMLHttpRequest();
    mainRequest.open('GET', 'http://localhost:8000/book/');
    mainRequest.onload = function () {
        var bookData = JSON.parse(mainRequest.responseText);
        renderHTML(bookData);
    };
    mainRequest.send();
});

function renderHTML(bookData){
    var htmlString = '';

    for (let i = 0; i<bookData.length;i++){
        htmlString += '<p>' + bookData[i].title + '  <button class="detailsRunner">Szczegóły</button></p><div class="details"></div>';
    }
    dataContainer.insertAdjacentHTML('beforeend', htmlString);
}

document.addEventListener("DOMContentLoaded", function () {

    var detailsContainer = document.querySelector('.details');
    var detailsRunner = document.querySelector('.detailsRunner');

    detailsRunner.addEventListener('click', function () {
        var details = new XMLHttpRequest();
        details.open('GET', 'http://localhost:8000/book/<id>');
        details.onload = function () {
            var bookDetails = JSON.parse(details.responseText);
            // renderHTML(bookDetails);
            console.log(bookDetails);
        };
        details.send();
    });

});
