const input1 = document.getElementById('val1');
const input2 = document.getElementById('val2');
const btn = document.getElementById('orBtn');
const p = document.getElementById('orOut');

function checkOr(){
    p.textContent = input1.checked || input2.checked;
}

btn.addEventListener('click', checkOr);