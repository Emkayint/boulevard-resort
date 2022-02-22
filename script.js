
let no = 0;
showSlides()

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("slides");

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "slideIndexne";
    }

    slideIndex ++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}