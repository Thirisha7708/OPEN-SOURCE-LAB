let images = [
   "./assest/images4.jpg",
   "./assest/images2.jpg",
   "./assest/images3.jpg",
   "./assest/images5.jpg"
];

let index = 0;
let slide = document.getElementById("Slideshow");

let changeImg = () => {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    slide.src = images[index];
};

setInterval(changeImg, 2000);