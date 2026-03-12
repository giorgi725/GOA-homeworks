// 3) შექმენით cryptoTracker აპი სადაც form submit-ზე მომხმარებელი ჩაწერს კრიპტოს სახელს გამოიყენეთ CoinGecko API [https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}) fetch მეთოდით წამოიღეთ JSON მონაცემები და გამოიტანეთ კრიპტოს სახელი ფასი და 24h ცვლილება დაამატეთ შეცდომის გამოტანა თუ კრიპტო არ მოიძებნა
// Requirements

// 1. HTML input და button მომხმარებლის საძიებოდ
// 2. async ფუნქცია fetchCrypto რომელიც გამოიძახებს API-ს
// 3. JSON მონაცემების მიღება და რენდერი ეკრანზე
// 4. შეცდომის გამოტანა თუ API არ აბრუნებს შედეგს
// 5. UI-ის გასუფთავება ყოველი ახალი ძიების წინ

const input = document.querySelector("#input")
const btn = document.querySelector("#btn")

async function cryptoFetch(crypto) {
    try{
        const fetchData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`) 
        const data = await fetchData.json()
        return data[0]
    } catch (error) { // error ებს იჭერს და ჭერში აწყობს
        console.log(`error: ${error}`)
    }
}
btn.addEventListener("click", async () => {
    const fetchedData = await cryptoFetch(input.value)
    document.body.innerHTML = `
        <img width ="200" src=${fetchedData.image}>
        <h1>name: ${fetchedData.name}</h1>
        <p>price: ${fetchedData.current_price}$</p>
        <p>price Change 24h: ${fetchedData.price_change_24h}$</p>
    `
})