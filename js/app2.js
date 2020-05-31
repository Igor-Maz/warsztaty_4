$(document).ready(function(){

    $('.starter').click(function () {
        $.get('http://localhost:8000/book/', function (data, status) {
            var bookList = $('<div>')
            for (let i = 0; i<data.length;i++){
                console.log(data[i]);
                $('.bookList').html(data[i].title);
            }
            alert(status)
        })
    })
})