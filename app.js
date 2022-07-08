"use strict";
$(document).ready(function () {


    // $('h2').click(function (e) { 
    //     e.preventDefault();
    //     $('h2').html('Congratulations');
    // });

    
    $('.btn').click(function (e) {
        e.preventDefault();
    
        let a = (a) => {
            for (let i=1; i<=a; i++){
                $('col-md-12').append(`<h1>${i}</h1>`);
            }
        }
        a($('input').val())
    });


    $('.btn').click(function (e) { 
        e.preventDefault();
        $('.btn').html('Congratulations');
    });

});





















