'use strict';

/*
*
* 
*
*/

const nxtBtn = document.querySelectorAll('.btn--next');
const previousBtn = document.querySelectorAll('.btn--previous');
const modal = document.querySelector('.modal');
const modalContent = document.querySelectorAll('.modal__steps');
const stepPagination = document.querySelector('.modal__steps-number');

console.log()


//We're gonna be using an event delegation
modalContent.forEach((el,i)=>{
    //el.classList.add('modal__steps--active');
  
    nxtBtn.forEach(c=>{
        c.addEventListener('click', function(e){
            if(el.classList.contains('modal__steps--active')){
                el.classList.remove('modal__steps--active')
            }
            document.querySelector(`.modal__steps--${c.dataset.next}`).classList.add('modal__steps--active');
         });
    })

    
    previousBtn.forEach(p=>{
        
        p.addEventListener('click', function(e){
            document.querySelector(`.modal__steps--${2}`).classList.add('modal__steps--active');
        });
    })

    
});

