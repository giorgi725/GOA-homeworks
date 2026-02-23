const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    if(input.value === "") return; 

    const li = document.createElement("li");

    li.textContent = input.value;

    const btn = document.createElement("button");
    btn.textContent = "შესრულებულია";

    btn.addEventListener("click", function() {
        li.style.textDecoration = "line-through";
    });

    li.appendChild(btn);
    list.appendChild(li);
    input.value = "";
});