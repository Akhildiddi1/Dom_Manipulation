const images = [
    "images/alvin-lenin-1XoK0RBanuU-unsplash.jpg",
    "images/davies-designs-studio-kyvuAx-kEDI-unsplash.jpg",
    "images/fermin-rodriguez-penelas-b8kEUZqMNoQ-unsplash.jpg",
    "images/keegan-houser--Q_t4SCN8c4-unsplash.jpg",
    "images/zachary-kadolph-1utQVafuNaU-unsplash.jpg"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update the image
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Event listeners for navigation
prevBtn.addEventListener("click", () => {
    console.log("Previous");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize with the first image
updateImage();
