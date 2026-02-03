function cubeNumber() {
    const num = Number(document.getElementById("numInput").value);
    const cube = num ** 3;
    document.getElementById("numOut").textContent = cube;
}
document.getElementById("cubeBtn").addEventListener("click", cubeNumber);