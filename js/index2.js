const clicked = document.querySelector('.click-page');
const card1 = document.querySelector('.click-page .card1');
const close = document.querySelector('.card1 .close span');
const img = document.querySelectorAll('.row .img img');

const icard = document.querySelector('.card1 img');






img.forEach((A)=>{

    A.addEventListener('click',()=>{
        clicked.style.display = 'flex';
        icard.src = A.src;      
    })

})

close.addEventListener('click' , ()=>{
    clicked.style.display = 'none';
})


