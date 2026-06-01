// 15) დაწერეთ პროგრამა, რომელიც გამოიყენებს process.stdin-ს მომხმარებლის input-ის მისაღებად და დაბეჭდავს მას კონსოლში. დაამატეთ ტექსტი: "თქვენ შეიყვანეთ: ..."

process.stdin.setEncoding('utf8');

console.log('შეიყვანეთ ტექსტი:');

process.stdin.on('data', (input) => {
    const text = input.trim();
    console.log(`თქვენ შეიყვანეთ: ${text}`);
    process.exit(); 
});