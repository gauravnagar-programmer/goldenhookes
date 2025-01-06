let slides=document.querySelectorAll('.slide');
let count=0;

slides.forEach((slide,index) => {
    slide.style.left=`${index*50}%`
});

const slidetopimg=()=>{
    slides.forEach( slide=>{
        slide.style.transform=`translateX(-${count *95}%)`
    })
}
const previmg= ()=>{
    count--;
    slidetopimg();
}
const nextimg= ()=>{
    if(count<slides.length){

        count++;
        slidetopimg();
    }
    
}
