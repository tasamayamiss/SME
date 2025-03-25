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
    var slides1 = document.getElementsByClassName("karusel_footer_text");
   

    if (n > slides1.length) {
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides1.length
    }
    for (i=0; i < slides1.length; i++){ 
        slides1[i].style.display="none";
    }
   
    slides1 [slideIndex-1].style.display = "block";
}