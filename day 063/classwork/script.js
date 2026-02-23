// let btn = document.querySelector("button")
// let input = document.querySelector("input")
// მოვლენების დამატება


// addEventListener - დაამატე მოვლენის მსმენელი

// function handle() {
//     console.log("clicked")
// }
// btn.addEventListener("click", handle)


// function smth() {
//     console.log("key down")
// }
// input.addEventListener("click", smth)

// function smth2(e) {
//     if (e.key == "e" || e.key === "E"){
//         console.log("jumpppp")
//     }
// }
// document.addEventListener("click", smth2)
// let stats = document.querySelector("p")

// let char = 200
// function change() {
//     let currentText = input.value
//     let message = currentText.length
//     if(message < char){
//         stats.style.color = 'green'
//     } else {
//         stats.style.color = 'red'
//         package.textContent = "characters limitttt"
//     }
//     stats.textContent = 'characters' + message + '/' + char

// }
// input.addEventListener('keydown', change)


// let btn = document.querySelector("button")


//addeventlistener 
// structure - (click an rame) (funqcia) (bollean (savaldebulo araa tuar mivutitebt falsea))

// როდესაც კონკრეტული მოვლენა ხდება რამდენიმე ელემენტზე ერთროულად რადგანაც ისისნი არიან ერთმანეთდან დაკავშირებული ერთ-ერთი მშობელი და მეორე შვილი,ასეტ შემთხვევაში რომელი მოვლენა უნდა გაეშვა პირველი

//bubbling - false მოვლენა უნდა მოხდეს ჯერ შვილი  ელემენტიდან
// capturing - true მოვლენა უნდა მოხდეს მშობელი ელემენტიდან

let images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
];

const nextbtn = document.getElementById("next")
const prevbtn = document.getElementById("prev")
const image = document.querySelector("img")

let currentimage = 0

image.src = images[currentimage]

nextbtn.onclick = function () {

    currentimage++

    if (currentimage >= images.length) {
        currentimage = 0
    }

    image.src = images[currentimage]
}

prevbtn.onclick = function () {

    currentimage--

    if (currentimage < 0) {
        currentimage = images.length - 1
    }

    image.src = images[currentimage]
}
