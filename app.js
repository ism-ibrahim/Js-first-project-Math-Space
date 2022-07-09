"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        let f = a => {
            if (Number(a)) {
                for (let i = 1; i <= a; i++) {
                    $('.minibox').append(`<h1>${a}</h1>`);
                }
            } else{
                $('.minibox').append(`<h1>${a}</h1>`);
            }
        }
        f ($('input').val());

    });

});





