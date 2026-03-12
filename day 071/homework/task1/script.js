// 2) შექმენით data.json ფაილი სადაც ჩაწერთ ხელით 3 ობიექტიან მასივს მაგალითად {id name balance} შემდეგ ეს json ფაილი დაკოპირეთ და JS ფაილში შეიტანეთ როგორც const data = [...] გამოიყენეთ JSON.stringify რომ ეს მასივი გადაიქცეს სტრინგად და შეინახოთ localStorage-ში შემდეგ JSON.parse გამოყენებით ამოიღეთ და გამოიტანეთ ekranzec
// Requirements

// 1. შექმენით JSON მასივი data.json-ში
// 2. დაკოპირებული მონაცემები ჩასვით JS-ში const data = [...]
// 3. JSON.stringify გამოიყენეთ localStorage.setItem-ში გადასატანად
// 4. JSON.parse გამოიყენეთ localStorage.getItem მონაცემის დასაბრუნებლად
// 5. გამოიტანეთ მიღებული ობიექტები ეკრანზე

// import data from "./data.json" assert { type: 'json' }

const data = [
    {"id": 102,"name": "giorgi","balance": 1000},
    {"id": 12,"name": "dachi", "balance": 100},
    {"id":99,"name": "dato", "balance": 300}
]    
localStorage.setItem("data", JSON.stringify(data))
const storage = JSON.parse(localStorage.getItem("data"))

console.log(storage)

document.body.innerHTML = `
    <p>id: ${storage[0].id}, name: ${storage[0].name}, balance: ${storage[0].balance}</p>
    <p>id: ${storage[1].id}, name: ${storage[1].name}, balance: ${storage[1].balance}</p>
    <p>id: ${storage[2].id}, name: ${storage[2].name}, balance: ${storage[2].balance}</p>
`


