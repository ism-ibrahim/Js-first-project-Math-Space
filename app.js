"use strict";
$(document).ready(function () {


    $('.btn').click(function (e) { 
        e.preventDefault();
        $('.btn').html('Congratulations');

        let p = (m) => {
            for (let i=0; i<m; i++){
                $(m).append(`<h1>${i}</h1>`);
            }
            let a = b => (b) ? p(b) : a(0)
        }
        a($('input').val(''))
    });

});



    
    // let p = m => {
    //     for (let i = 0; i<m; i++) {console.log(m)}
    // }
    // let a = b => (b) ? p(b) : a(0)






    // $('.btn').click(function (e) {
    //     e.preventDefault();
    
    //     let a = (a) => {
    //         for (let i=1; i<=a; i++){
    //             $('col-md-12').append(`<h1>${i}</h1>`);
    //         }
    //     }
    //     a($('input').val())
    // });























