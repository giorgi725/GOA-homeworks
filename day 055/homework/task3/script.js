const tablet = {
    brand: "Apple",
    model: "iPad Pro",
    color: "Silver",
    playMusic: function () {
    console.log("Playing music...");
    }
};

document.getElementById("musicBtn").addEventListener("click", function () {
    tablet.playMusic();
});