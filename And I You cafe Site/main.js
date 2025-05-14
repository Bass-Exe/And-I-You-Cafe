let current = 1;


const changeSlide = () => {
    const slideList = document.querySelectorAll('.slide');
    const slides = Array.from(slideList);

    console.log(current);
    
    if(current > slides.length){
        current = 1;
    } else if (current === 0 ){
        current = slides.length;
    }


    slides.forEach(slide => {
        if(slide.classList[1].split('-')[1] * 1 === current){
        slide.style.cssTest = "visibility: visible; opacity : 1;"
    } else{
        slide.style.cssTest = "visibility: hidden;  opacity : 0;"
     }
    
    });
}

changeSlide();

