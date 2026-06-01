// 4) დაწერეთ პროგრამა, სადაც:
// - შექმნით Buffer-ს Buffer.from()-ით  
// - დაბეჭდავთ მას raw ფორმით  
// - გადააქცევთ string-ად toString()-ით  
// - ამოიღებთ substring-ს კონკრეტული range-ით


const buf = Buffer.from('Hello Buffer');

console.log(buf);

const text = buf.toString();
console.log(text);

const part = buf.slice(6, 10).toString();

console.log(part);