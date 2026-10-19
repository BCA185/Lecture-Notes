document.addEventListener("DOMContentLoaded", () => {
    const showSlides = (n) => {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("demo");
        const captionText = document.getElementById("caption");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "inline";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    };

    const openModal = () => {
        document.getElementById("myModal").style.display = "block";
    };

    const closeModal = () => {
        document.getElementById("myModal").style.display = "none";
    };

    var slideIndex = 1;
    showSlides(slideIndex);

    const plusSlides = (n) => {
        showSlides((slideIndex += n));
    };

    const currentSlide = (n) => {
        showSlides((slideIndex = n));
    };

    // Attach event listeners
    const images = document.querySelectorAll(".hover-shadow");
    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            openModal();
            currentSlide(index + 1);
        });
    });

    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", closeModal);

    const prevButton = document.querySelector(".prev");
    prevButton.addEventListener("click", () => plusSlides(-1));

    const nextButton = document.querySelector(".next");
    nextButton.addEventListener("click", () => plusSlides(1));

    const thumbnails = document.querySelectorAll(".demo");
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => currentSlide(index + 1));
    });
});
