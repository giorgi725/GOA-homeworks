// 11) შექმენით while ციკლი რომელიც შეაჩერებს მუშაობას მაშინ, როცა მომხმარებელი შეიყვანს სიტყვას "stop"

let x = true
while (x){
    const user = prompt("enter magic word: ")
    if (user == "stop") {
        x = false
    }
}