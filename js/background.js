const images = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.classList.add("bg");
document.body.classList.add(chosenImage);