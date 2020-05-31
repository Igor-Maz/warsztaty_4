var dataContainer = document.querySelector('.bookList');

$(function () {

    //GET
    $.ajax({
        url: 'http://localhost:8000/book/',
        data: {},
        type: 'GET',
        dataType: 'json'
    }).done(function (result) {
        var htmlString = '';

        for (let i = 0; i < result.length; i++) {
            htmlString += '<p>' + result[i].title + '  <button class="detailsRunner">Szczegóły</button></p>' +
                '<div class="details hidden"><table class="main-table">\n' +
                '    <table>' +
                '        <thead>\n' +
                '        <tr>\n' +
                '            <th>ID</th>\n' +
                '            <th>Tytuł</th>\n' +
                '            <th>ISBN</th>\n' +
                '            <th>Gatunek</th>\n' +
                '            <th>Author</th>\n' +
                '            <th>Publisher</th>\n' +
                '            <th>Action</th>\n' +
                '        </tr>\n' +
                '        </thead>\n' +
                '\n' +
                '        <tbody>\n' +
                '        <tr>\n' +
                '            <th>' + result[i].id + '</th>\n' +
                '            <td>\n' + result[i].title +
                '            </td>\n' +
                '            <td>\n' + result[i].isbn +
                '            </td>\n' +
                '            <td>\n' + result[i].genre +
                '            </td>\n' +
                '            <td>\n' + result[i].author +
                '            </td>\n' +
                '            <td>\n' + result[i].publisher +
                '            </td>\n' +
                '            <td>\n' +
                '                <button>Usuń</button>\n' +
                '            </td>\n' +
                '        </tr>\n' +
                '        </tbody>\n' +
                '    </table>' +
                '</div>';
        }
        // var newElement = $(htmlString)
        // dataContainer.append(newElement)
        dataContainer.insertAdjacentHTML('beforeend', htmlString);

    }).fail(function (xhr, status, err) {
    }).always(function (xhr, status) {
    });

    //POST

    var $title = $("#title");
    var $isbn = $("#isbn");
    var $genre = $("#genre");
    var $author = $("#author");
    var $publisher = $("#publisher");

    $('#add-book').on('click', function () {

        var newBook = {
            title: $title.val(),
            isbn: $isbn.val(),
            genre: $genre.val(),
            author: $author.val(),
            publisher: $publisher.val()
        };

        $.ajax({
            url: 'http://localhost:8000/book/',
            data: newBook,
            type: 'POST',
            dataType: 'json'
        }).done(function (result) {
            var htmlString = '';

        for (let i = 0; i < result.length; i++) {
            htmlString += '<p>' + result[i].title + '  <button class="detailsRunner">Szczegóły</button></p>' +
                '<div class="details hidden"><table class="main-table">\n' +
                '    <table>' +
                '        <thead>\n' +
                '        <tr>\n' +
                '            <th>ID</th>\n' +
                '            <th>Tytuł</th>\n' +
                '            <th>ISBN</th>\n' +
                '            <th>Gatunek</th>\n' +
                '            <th>Author</th>\n' +
                '            <th>Publisher</th>\n' +
                '            <th>Action</th>\n' +
                '        </tr>\n' +
                '        </thead>\n' +
                '\n' +
                '        <tbody>\n' +
                '        <tr>\n' +
                '            <th>' + result[i].id + '</th>\n' +
                '            <td>\n' + result[i].title +
                '            </td>\n' +
                '            <td>\n' + result[i].isbn +
                '            </td>\n' +
                '            <td>\n' + result[i].genre +
                '            </td>\n' +
                '            <td>\n' + result[i].author +
                '            </td>\n' +
                '            <td>\n' + result[i].publisher +
                '            </td>\n' +
                '            <td>\n' +
                '                <button>Usuń</button>\n' +
                '            </td>\n' +
                '        </tr>\n' +
                '        </tbody>\n' +
                '    </table>' +
                '</div>';
        }
        })
    })


    //DETAILS

    var detailsRunner = document.querySelectorAll('.detailsRunner');

    for (let j = 0; j < detailsRunner.length; j++) {
        detailsRunner[j].addEventListener('click', function () {
            console.log(j)
            var toBeHidden = this.parentElement.nextSibling
            toBeHidden.classList.toggle('hidden')
        });
    }

})