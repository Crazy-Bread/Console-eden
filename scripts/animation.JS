const images = ['rec-1.png', 'rec-2.png', 'rec-3.png'];

let currentImage = 0;

function rotateImages() {
    const image = document.getElementById('rec');

 
    currentImage = (currentImage + 1) % images.length;

    image.src = "img/"+images[currentImage];

    setTimeout(rotateImages, 2000);
}

window.onload = rotateImages;