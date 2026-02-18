const box = document.getElementById("child")
let positionX = 0
let positionY = 0
let direction = "right"

function animate() {
    if (direction === "right"){
        positionX++;
        if (positionX >= 150) {
            direction = "bottom"
        }
    }
    if (direction === "bottom"){
        positionY++
        if (positionY >= 150) {
            direction = "left"
        }
    }
    if (direction === "left") {
        positionX--;
        if (positionX <= 0) {
            direction = "top"
        }
    }
    if (direction === "top") {
        positionY--;
        if(positionY <= 0) {
            direction = "right"
        }
    }

    box.style.left = `${positionX}px`
    box.style.top = `${positionY}px`
    box.style.right = `${positionX}px`
    box.style.bottom = `${positionY}px`

}
setInterval(animate, 10)