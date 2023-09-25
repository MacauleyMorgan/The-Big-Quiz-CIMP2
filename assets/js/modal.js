const modalButton = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeButton = document.getElementById("close");
const playButton = document.getElementById("playbutton");

/** Event listener to detect when a user clicks instructions button to display paragraph and remove clutter on screen */
modalButton.addEventListener("click", function (e) {
    modalContent.style.display = "inline";
    modalContent.style.fontSize = "0.8rem";
    modalButton.style.display = "none";
    playButton.style.display = "none";
});

/** Event listener to detect when the acknowledge button is clicked and close the paragraph resetting the screen to previous state */
closeButton.addEventListener("click", function (e) {
    modalContent.style.display = "none";
    modalButton.style.display = "inline";
    playButton.style.display = "inline";
});
