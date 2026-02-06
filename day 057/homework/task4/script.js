// 5) შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, start - end, თქვენი მოვალეობაა ამ რიცხვებს შორის ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ დააბრუნეთ მასივი

function number(start, end) {
    let result = []
    for (start++; start < end; start++){
        result.push(start)
    }
    return result
}
console.log(number(12,24))

// 6) დაბრუნებული მასივი გადაეცით ფუნქციას რომელსაც დაარქმევთ calculateAverage ამ ფუნქციაში გამოითვლით იმ რიცხვების საშუალოს რომელიც მოთავსებულია სიაში, მიღებული საშუალო დააბრუნეთ ფუნქციიდან

function calculateAverage(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum / nums.length
}
console.log(calculateAverage([102,102,102]))

// 7) შექმენით ფუნქცია რომელსაც დაარქმევთ even_sum, ამ ფუნქციას ექნება 1 პარამეტრი სახელად border (ზღვარი), ფუნქციამ 0-იდან border-ის ჩათვლით უნდა გაიგოს ყველა რიცხვი if პირობითი განცხადების საშვალებით, ეს ყველა ლუწი რიცხვი უნდა შეკრიბოთ და დააბრუნოთ

function evenSum(border) {
    let sum = 0
    for (let i = 0; i < border; i++){
        if (i % 2 == 0) {
            sum += i
        }
    }
    return sum
}
console.log(evenSum(12))

// 8) შექმენით for ციკლი რომლითან 20-იდან 0-ის ჩათვლით ყველა რიცხვს დაბეჭდავთ

for (let i = 20; i > -1; i--) {
    console.log(i)
}

// 9) შექმენით for ციკლი რომელიც 0-იდან 10-ის ჩათვლით ყველა ლუწ რიცხვს დაბეჭდავს, if-ის გამოყენების გარეშე

for (let i = 0; i < 10; i+=2) {
    console.log(i)
}

// 10) შექმენით while ციკლი რომელიც დაითვლის რიცხვებს 1-იდან 50-მდე და თითოეულ რიცხვს დაბეჭდავს კონსოლში

let i = 1
while (i < 50) {
    console.log(i)
    i++
}