// title: brightnessAnimation.js
// author: ChatGPT, Veronica Hutchins
// date: 05/7/2026
// note: Brightens contact links one at a time every 5 seconds
//       and pauses the animation when the user hovers over a link.

const links = [
    document.querySelector("#email a"),
    document.querySelector("#linkedin a"),
    document.querySelector("#github a")
];

let currentIndex = 0;
let animationTimer;

// Highlight the next link
function highlightNextLink() {

    // Remove highlight from all links
    links.forEach(link => {
        link.classList.remove("active-link");
    });

    // Highlight current link
    links[currentIndex].classList.add("active-link");

    // Move to the next link
    currentIndex++;

    if (currentIndex >= links.length) {
        currentIndex = 0;
    }
}

// Start the animation
function startAnimation() {
    animationTimer = setInterval(highlightNextLink, 3500);
}

// Pause the animation
function pauseAnimation() {
    clearInterval(animationTimer);
}

// Start immediately
highlightNextLink();
startAnimation();

// Pause when the mouse enters any contact link
// links.forEach(link => {

//     link.addEventListener("mouseenter", () => {
//         pauseAnimation();
//     });

//     link.addEventListener("mouseleave", () => {
//         startAnimation();
//     });

// });

// Handle mouse hovering
links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        // Pause automatic animation
        pauseAnimation();

        // Remove highlight from every link
        links.forEach(otherLink => {
            otherLink.classList.remove("active-link");
        });

        // Highlight ONLY the link being hovered
        link.classList.add("active-link");
    });


    link.addEventListener("mouseleave", () => {

        // Remove the hover highlight
        link.classList.remove("active-link");

        // Start automatic animation again
        startAnimation();
    });

});