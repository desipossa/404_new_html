const MAIN_SLIDE = new Swiper('.main_visual_slide', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const MAIN_SLIDE_LEFT_BUTTON = document.querySelector('.main_visual_slide .arrows .left');
const MAIN_SLIDE_RIGHT_BUTTON = document.querySelector('.main_visual_slide .arrows .right');

MAIN_SLIDE_LEFT_BUTTON.addEventListener('click', () => {
    MAIN_SLIDE.slidePrev();
});
MAIN_SLIDE_RIGHT_BUTTON.addEventListener('click', () => {
    MAIN_SLIDE.slideNext();
});

const MAIN_SLIDE_DOTS = document.querySelectorAll('.main_visual_slide .dots li');
console.log(MAIN_SLIDE_DOTS);

// MAIN_SLIDE_DOTS[0].addEventListener('click', () => {
//     console.log("번호")
// });

MAIN_SLIDE_DOTS.forEach((it, idx) => {
    it.addEventListener("click", () => {
        // console.log("번호 : ", idx);
        MAIN_SLIDE.slideTo(idx);
        MAIN_SLIDE_DOTS.forEach(it => it.classList.remove('on'))
        MAIN_SLIDE_DOTS[idx].classList.add('on');
    })
})
