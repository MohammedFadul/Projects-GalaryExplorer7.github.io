const city = document.querySelectorAll('#city');
// const city = document.querySelector('.phone-list #city')
const night = document.querySelectorAll('#night');
const space = document.querySelectorAll('#space');
const car = document.querySelectorAll('#cars');
const nature = document.querySelectorAll('#nature');
const animal = document.querySelectorAll('#animals');




let row1 = document.querySelectorAll('.row .img img');

const citys =  [
    {images : "images/city/1.jpg"},
    {images : "images/city/2.jpg"},
    {images : "images/city/3.jpg"},
    {images : "images/city/4.jpg"},
    {images : "images/city/5.jpg"},
    {images : "images/city/6.jpg"},
    {images : "images/city/7.jpg"},
    {images : "images/city/8.jpg"},
    {images : "images/city/9.jpg"},
    {images : "images/city/10.jpg"}
    
]


city.forEach((C)=>{
    C.addEventListener('click' , ()=>{
        for(let i = 0 ; i <= 9 ; i++){
            Array.from(row1)[i].src = citys[i].images;
            
        }
    })
})

const nights =  [
    {images : "images/night/1.jpg"},
    {images : "images/night/2.jpg"},
    {images : "images/night/3.jpg"},
    {images : "images/night/4.jpg"},
    {images : "images/night/5.jpg"},
    {images : "images/night/6.jpg"},
    {images : "images/night/7.jpg"},
    {images : "images/night/8.jpg"},
    {images : "images/night/9.jpg"},
    {images : "images/night/10.jpg"},

    
]


night.forEach((N)=>{
    
N.addEventListener('click' , ()=>{
    for(let i = 0 ; i <= 9 ; i++){
        Array.from(row1)[i].src = nights[i].images;
        
    }
})
})

const spaces =  [
    {images : "images/space/1.jpg"},
    {images : "images/space/2.jpg"},
    {images : "images/space/3.jpg"},
    {images : "images/space/4.jpg"},
    {images : "images/space/5.jpg"},
    {images : "images/space/6.jpg"},
    {images : "images/space/7.jpg"},
    {images : "images/space/8.jpg"},
    {images : "images/space/9.jpg"},
    {images : "images/space/10.jpg"},
    
]

space.forEach((S)=>{
    
S.addEventListener('click' , ()=>{
    for(let i = 0 ; i <= 9 ; i++){
        Array.from(row1)[i].src = spaces[i].images;
        
    }
})
})

const cars =  [
    {images : "images/cars/1.jpg"},
    {images : "images/cars/2.jpg"},
    {images : "images/cars/3.jpg"},
    {images : "images/cars/4.jpg"},
    {images : "images/cars/5.jpg"},
    {images : "images/cars/6.jpg"},
    {images : "images/cars/7.jpg"},
    {images : "images/cars/8.jpg"},
    {images : "images/cars/9.jpg"},
    {images : "images/cars/10.jpg"},

    
]

car.forEach((CA)=>{
    CA.addEventListener('click' , ()=>{
        for(let i = 0 ; i <= 9 ; i++){
            Array.from(row1)[i].src = cars[i].images;
            
        }
    })
})


const natures =  [
    {images : "images/nature/1.jpg"},
    {images : "images/nature/2.jpg"},
    {images : "images/nature/3.jpg"},
    {images : "images/nature/4.jpg"},
    {images : "images/nature/5.jpg"},
    {images : "images/nature/6.jpg"},
    {images : "images/nature/7.jpg"},
    {images : "images/nature/8.jpg"},
    {images : "images/nature/9.jpg"},
    {images : "images/nature/10.jpg"},

   

    
]

nature.forEach((NA)=>{
    NA.addEventListener('click' , ()=>{
        for(let i = 0 ; i <= 9 ; i++){
            Array.from(row1)[i].src = natures[i].images;
            
        }
    })
})



const animals =  [
    {images : "images/animals/1.jpg"},
    {images : "images/animals/2.jpg"},
    {images : "images/animals/3.jpg"},
    {images : "images/animals/4.jpg"},
    {images : "images/animals/5.jpg"},
    {images : "images/animals/6.jpg"},
    {images : "images/animals/7.jpg"},
    {images : "images/animals/8.jpg"},
    {images : "images/animals/9.jpg"},
    {images : "images/animals/10.jpg"},


   

    
]

animal.forEach((AN)=>{
    AN.addEventListener('click' , ()=>{
        for(let i = 0 ; i <= 9 ; i++){
            Array.from(row1)[i].src = animals[i].images;
            
        }
    })
})



