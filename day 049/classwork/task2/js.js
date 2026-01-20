const andoperand1 = document.getElementById("and1")
const andoperand2 = document.getElementById("and2")
const andbtn = document.getElementById("andsend")
const andres = document.getElementById("getres")

andbtn.oclick = function(){
    let val1 = andoperand1.Checked;
    let val2 = andoperand2.checked;
    let logicalresult = val1 && val2
    andresult.textContent = 'Result of operation ' + string(val1) && + strinf(val2) + " = " + logicalresult
}

const oroperand1 = document.getElementById("and1")
const oroperand2 = document.getElementById("and2")
const orbtn = document.getElementById("andsend")
const orresult = document.getElementById("getres")

andbtn.oclick = function(){
    let val1 =oroperand1.Checked;
    let val2 = oroperand2.checked;
    let logicalresult = val1 || val2
    orresult.textContent = 'Result of operation ' + string(val1) && + strinf(val2) + " = " + logicalresult
}
