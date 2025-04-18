var slideIndex = 0;
showSlides(slideIndex);

function changeSlides(n) {
    showSlides(slideIndex = n) ;
}

function showSlides(n) {
    var slides = document.getElementsByClassName("contents");

    
    
    if (n == 0) {
        slides [0].style.display = "block";
        slides[1].style.display="none";
        slides[2].style.display="none";
    } else if (n == 1){
        slides [1].style.display = "block";
        slides[0].style.display="none";
        slides[2].style.display="none";
    }
    else if (n == 2){
        slides [2].style.display = "block";
        slides[0].style.display="none";
        slides[1].style.display="none";
    }
   
    
}


function changeColor(k) {
    var btns = document.getElementsByClassName("btns");
    if (k == 0) {
        btns[0].style.backgroundColor = "white";
        btns[1].style.backgroundColor="#26145e";
        btns[2].style.backgroundColor="#26145e";
        btns[0].style.color = "#26145e";
        btns[1].style.color="white";
        btns[2].style.color="white";
    } else if (k == 1){
        btns[1].style.backgroundColor = "white";
        btns[0].style.backgroundColor="#26145e";
        btns[2].style.backgroundColor="#26145e";
        btns[1].style.color = "#26145e";
        btns[0].style.color="white";
        btns[2].style.color="white";
    }
    else if (k == 2){
        btns[2].style.backgroundColor = "white";
        btns[1].style.backgroundColor="#26145e";
        btns[0].style.backgroundColor="#26145e";
        btns[2].style.color = "#26145e";
        btns[1].style.color="white";
        btns[0].style.color="white";
    }
}



