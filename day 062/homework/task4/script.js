const box = document.getElementById("child")
let positionX = 0
let positionY = 0
let direction = "right"
let laps = 0
let reverse = false

function animate() {
    if(!reverse) {
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
            laps++;
        }
    }
    } else {
        if (direction === "right") {
            positionX++
            if (positionX >= 150) direction = "top"
        }
        else if (direction === "top") {
            positionY--
            if (positionY <= 0) direction = "left"
        }
        else if (direction === "left") {
            positionX--
            if (positionX <= 0) direction = "bottom"
        }
        else if (direction === "bottom") {
            positionY++
            if (positionY >= 150) direction = "right"
        }
    }
    if (laps === 3) {
        reverse = true
    }

    box.style.left = `${positionX}px`
    box.style.top = `${positionY}px`

}
setInterval(animate, 1)