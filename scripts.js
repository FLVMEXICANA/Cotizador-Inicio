let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].style.zIndex = "1"; // Asegura que las imágenes estén en la capa correcta
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 11000); // Cambia cada 11 segundos
}

let textIndex = 0;
showText();

function showText() {
    let texts = document.getElementsByClassName("text-container");
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = "none";
    }
    textIndex++;
    if (textIndex > texts.length) {
        textIndex = 1;
    }
    texts[textIndex - 1].style.display = "block";
    setTimeout(showText, 11000); // Cambia cada 10 segundos
}
