    const slideContainer = document.querySelector('.slide-container');
    const slides = document.querySelectorAll('.slide');

    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;
    const totalSlides = slides.length;
    const containerWidth = totalSlides * slideWidth;

    function slide() {
        currentIndex++;
        if (currentIndex === totalSlides) {
            slideContainer.style.transition = 'none';
            currentIndex = 0;
            slideContainer.style.transform = `translateX(0)`;
            setTimeout(() => {
                slideContainer.style.transition = 'transform 1s ease';
                currentIndex++;
                slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            }, 100);
        } else {
            slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }

    setInterval(slide, 5000); // Change slide every 3 seconds