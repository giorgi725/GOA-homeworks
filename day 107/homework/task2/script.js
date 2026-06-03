// 3) დაწერეთ პროგრამა, სადაც:
// - გამოიყენებთ setTimeout(..., 0) და setImmediate()  
// - დაბეჭდავთ ტექსტებს ისე, რომ გამოჩნდეს მათი შესრულების განსხვავებული რიგი  
// - დაამატებთ console.log-ს სინქრონული კოდის დასანახად

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

setImmediate(() => {
    console.log("3");
});

console.log("4");

// 1
// 4
// 2
// 3