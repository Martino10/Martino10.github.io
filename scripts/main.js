// Store a separate slide index for each slideshow
let slideIndices = {};

let foosballclip = document.getElementById("foosballclip");

// Initialize all slideshows on page load
document.querySelectorAll(".slideshow-and-dots-container").forEach(slideshow => {
    const id = slideshow.id;
    slideIndices[id] = 1;
    showSlides(1, id);
});

// Next/previous controls
function plusSlides(n, slideshowId) {
    showSlides(slideIndices[slideshowId] += n, slideshowId);
}

// Thumbnail image controls
function currentSlide(n, slideshowId) {
    showSlides(slideIndices[slideshowId] = n, slideshowId);
}

function showSlides(n, slideshowId) {
    const container = document.getElementById(slideshowId);
    const slides = container.querySelectorAll(".mySlides");
    const dots = container.querySelectorAll(".dot");

    if (n > slides.length) { slideIndices[slideshowId] = 1; }
    if (n < 1) { slideIndices[slideshowId] = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndices[slideshowId] - 1].style.display = "block";
    dots[slideIndices[slideshowId] - 1].classList.add("active");
    if (n == 3 && slideshowId == 'slideshow6') {
        // Start ultimate foosball gameplay video from beginning
        foosballclip.load();
    }
}

// Optional: separate timers per slideshow
(function startSlideshowTimers() {
    document.querySelectorAll(".slideshow-and-dots-container").forEach(slideshow => {
        const id = slideshow.id;
        setInterval(() => {
            plusSlides(1, id);
        }, 15000);
    });
})();
