function reverseWord() {
    const word = document.getElementById("wordInput").value;
    const reversed = word.split("").reverse().join("");
    document.getElementById("wordOut").textContent = reversed;
}

document.getElementById("reverseBtn").addEventListener("click", reverseWord);