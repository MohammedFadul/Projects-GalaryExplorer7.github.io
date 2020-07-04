// Cliked Page

const clicked = document.querySelector('.click-page');
const card1 = document.querySelector('.click-page .card1');
const close = document.querySelector('.card1 .close span');
const img = document.querySelectorAll('.row .img img');

const icard = document.querySelector('.card1 img');


// Phone List 
const all_list = document.querySelectorAll('.phone-list ul li a');
const phone_list_button = document.querySelector('header .phone-list-button');
const phone_list = document.querySelector('header .phone-list')
const body = document.querySelector('body');

// console.log(Array.from(all_list));


all_list.forEach((All)=>{
    All.addEventListener('click' , ()=>{
        body.classList.toggle('open');  
    })
})



phone_list_button.addEventListener('click' ,()=>{

    body.classList.toggle('open');    

})


 



img.forEach((A)=>{

    A.addEventListener('click',()=>{
        clicked.style.display = 'flex';
        icard.src = A.src;      
    })

})

close.addEventListener('click' , ()=>{
    clicked.style.display = 'none';
})



// Pageniation

const images1 = [
    {image : "images/12.jpg"},
    {image : "images/6.jpg"},
    {image : "images/11.jpg"},
    {image : "images/26.jpg"},
    {image : "images/19.jpg"},
    {image : "images/3.jpg"},
    {image : "images/7.jpg"},
    {image : "images/21.jpg"},
    {image : "images/14.jpg"},
    {image : "images/22.jpg"}
    
]


const images2 = [
    {images : "images/1.jpg"},
    {images : "images/2.jpg"},
    {images : "images/3.jpg"},
    {images : "images/4.jpg"},
    {images : "images/5.jpg"},
    {images : "images/6.jpg"},
    {images : "images/7.jpg"},
    {images : "images/8.jpg"},
    {images : "images/9.jpg"},
    {images : "images/10.jpg"}
    
]

const images3 = [
    {images : "images/11.jpg"},
    {images : "images/12.jpg"},
    {images : "images/13.jpg"},
    {images : "images/14.jpg"},
    {images : "images/15.jpg"},
    {images : "images/16.jpg"},
    {images : "images/17.jpg"},
    {images : "images/18.jpg"},
    {images : "images/19.jpg"},
    {images : "images/20.jpg"}
]

const images4 = [
    {images : "images/21.jpg"},
    {images : "images/22.jpg"},
    {images : "images/23.jpg"},
    {images : "images/24.jpg"},
    {images : "images/25.jpg"},
    {images : "images/26.jpg"},
    {images : "images/27.jpg"},
    {images : "images/28.jpg"},
    {images : "images/29.jpg"},
    {images : "images/30.jpg"}
]

const all_arr = images1.concat(images2 , images3 , images4);
// console.log(all_arr);




const row = document.querySelectorAll('.row .img img');
const slider = document.querySelector('.p-slider div');






const p1 = document.getElementById('1');
const p2 = document.getElementById('2');
const p3 = document.getElementById('3');
const p4 = document.getElementById('4');





function load(){
    for(let i = 0 ; i <= 9 ; i++){
        Array.from(row)[i].src = images1[i].image;
        
    }
}

window.onload = load;


p1.addEventListener('click' , ()=>{
    
    load()
})


p2.addEventListener('click' , ()=>{
    
    for(let i = 0 ; i <= 9 ; i++){
        Array.from(row)[i].src = images2[i].images;
        
    }
})

p3.addEventListener('click' , ()=>{
    for(let i = 0 ; i <= 9 ; i++){
        Array.from(row)[i].src = images3[i].images;
        
    }
})


p4.addEventListener('click' , ()=>{
    for(let i = 0 ; i <= 9 ; i++){
        Array.from(row)[i].src = images4[i].images;
        
    }
})


