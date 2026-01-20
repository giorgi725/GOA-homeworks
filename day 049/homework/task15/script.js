const inp1 = document.getElementById('notVal');
const btn = document.getElementById('notBtn');
const p = document.getElementById('notOut');

function checkbox() {
    p.textContent = !inp1.checked;
}
btn.addEventListener('click', checkbox)