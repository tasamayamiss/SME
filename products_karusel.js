var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n) ;
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("product");
    var slides1 = document.getElementsByClassName("karusel_footer_text");
    var slides2 = document.getElementsByClassName("karusel_text");

    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides.length
    }
    for (i=0; i < slides.length; i++){ 
        slides[i].style.display="none";
        slides1[i].style.display="none";
        slides2[i].style.display="none";
    }
   
    slides [slideIndex-1].style.display = "block";
    slides1 [slideIndex-1].style.display = "block";
    slides2 [slideIndex-1].style.display = "block";
}


