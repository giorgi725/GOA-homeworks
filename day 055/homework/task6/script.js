function checkEntry() {
    const hasTicket = document.getElementById("ticket").checked;
    const hasFriend = document.getElementById("friend").checked;
    if (hasTicket || hasFriend) {
        document.getElementById("entryOut").textContent = "შეგიძლიათ შესვლა";
    } else {
        document.getElementById("entryOut").textContent = "შესვლა აკრძალულია";
    }
}
document.getElementById("entryBtn").addEventListener("click", checkEntry);