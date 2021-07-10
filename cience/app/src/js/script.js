'use strict';

//declare
const anchBut = document.getElementById('anchor-button'),
    form = document.getElementById('form'),
    formOffset = form.getBoundingClientRect().top - document.body.getBoundingClientRect().top;


console.log(formOffset)

//add event to anchor-scroll to form
anchBut.addEventListener('click', function() {
    window.scrollTo({
        top: formOffset,
        behavior: 'smooth'
    })
});