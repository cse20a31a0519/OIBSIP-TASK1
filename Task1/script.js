const sliderImage = document.getElementById('sliderImage');
const nextArrow = document.getElementById('nextArrow');

const images = [ 'images/t7.jpg', 'images/t6.jpg','images/t1.jpg','images/t10.jpg','images/t9.jpg','images/t8.jpg','images/t2.jpg','images/t11.jpg',
'images/t13.jpg','images/t14.jpg','images/t15.jpg','images/t16.jpg','images/t17.jpg','images/t18.jpg','images/t19.jpg','images/t20.jpg'];
let currentImageIndex = 0;

nextArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = images[currentImageIndex];
        sliderImage.style.opacity = 1;
    }, 500);
});
