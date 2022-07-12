"use strict";
$(document).ready(function () {

    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     let f = a => {
    //         if (Number(a)) {
    //             for (let i = 1; i <= a; i++) {
    //                 $('.minibox').append(`<h1>${a}</h1>`);
    //             }
    //         } else{
    //             $('.minibox').append(`<h1>${a}</h1>`);
    //         }
    //     }
    //     f ($('input').val());

    $('.btn').click(function (e) {
        e.preventDefault();
        if ($.trim($('input').val()) == '') {
            $('input').val();
        } else {
            let f = a => {
                for (let i = 0; i < a; i++) { $('.minibox').append(`<h1>${a}</h1>`) };
            }
            let z = e => Number(e) ? f(e) : $('.minibox').append(`<h1>${e}</h1>`);
            z($.trim($('input').val()));
        }
        $('input').val('') 
    });

});










