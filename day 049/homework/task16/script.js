const inp1 = document.getElementById('num1');
const inp2 = document.getElementById('num2');
const btn = document.getElementById('andBtn');
const p = document.getElementById('andOut');

function checkAnd() {
    const int1 = inp1.value
    const int2 = inp2.value

    p.textContent = int1 > 10 && int2 > 10
}

btn.addEventListener('click', checkAnd)