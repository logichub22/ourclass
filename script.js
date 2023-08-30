const images = document.querySelectorAll('.image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const close = document.getElementById('close');

images.forEach(image => {
    image.addEventListener('click', () => {
        const imgSrc = image.querySelector('img').src;
        const imgCaption = image.querySelector('.caption').textContent;
        lightboxImage.src = imgSrc;
        lightboxCaption.textContent = imgCaption;
        lightbox.style.display = 'flex';
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});