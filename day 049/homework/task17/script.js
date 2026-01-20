const inp1 = document.getElementById('valA');
const inp2 = document.getElementById('valB');
const btn = document.getElementById('orNumBtn');
const p = document.getElementById('orNumOut');

function checkOrNum() {
    const int1 = inp1.value
    const int2 = inp2.value

    p.textContent = int1 > 5 || int2 > 5
}
btn.addEventListener('click', checkOrNum)