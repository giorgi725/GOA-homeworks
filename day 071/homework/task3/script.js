// 4) შექმენით toDo აპლიკაცია სადაც input-ით შეყვანილი task დაემატება DOM-ში list-ის სახით თითო task-ს ექნება delete ღილაკი გამოიყენეთ JSON.stringify მონაცემების localStorage-ში შესანახად და JSON.parse რომ რეფრეშის შემდეგ tasks გამოჩნდეს filter გამოიყენეთ წაშლილი task-ების ამოსაღებად
// Requirements
// 1. HTML input და add ღილაკი
// 2. JS ფუნქცია addTask რომელიც დაამატებს ახალ task DOM-ში
// 3. delete ღილაკი თითო task-ის წასაშლელად
// 4. task-ების შენახვა localStorage-ში JSON.stringify გამოყენებით
// 5. localStorage-ის ამოღება JSON.parse და არსებული task-ების რენდერი
// 6. filter რომ წაშლილი task-ები არ დარჩეს მასივში

const input = document.querySelector("input")
const btn = document.querySelector("button")
const ul = document.querySelector("ul")

let data = JSON.parse(localStorage.getItem("toDoData")) || []
console.log(data)

btn.addEventListener("click", () => {
    data.push(input.value)
    localStorage.setItem("toDoData", JSON.stringify(data))
    renderTasks()
})

function deleteTask(index) {
    data = data.filter((_, i) => i !== index)
    localStorage.setItem("toDoData", JSON.stringify(data))
    renderTasks()
}

function renderTasks() {
    ul.innerHTML = ""
    data.forEach((el, index) => {
        ul.innerHTML += `
        <li>
            ${el}
            <button onclick="deleteTask(${index})">delete</button>
        </li>`
    })
}