const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
let currentIndex = 0;

document.querySelector('.swiper-button-next').addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSwiper();
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateSwiper();
});

function updateSwiper() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');
        if (index === currentIndex) {
            slide.classList.add('active');
        } else if (index === currentIndex - 1 || (currentIndex === 0 && index === slides.length - 1)) {
            slide.classList.add('prev');
        } else if (index === currentIndex + 1 || (currentIndex === slides.length - 1 && index === 0)) {
            slide.classList.add('next');
        }
    });

    const offset = (swiperWrapper.offsetWidth / 2) - (slides[currentIndex].offsetWidth / 2);
    swiperWrapper.style.transform = `translateX(${offset - slides[currentIndex].offsetLeft}px)`;
}

updateSwiper();



const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





  