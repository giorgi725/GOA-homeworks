// 5) შექმენით პროგრამა, სადაც რამდენიმე Buffer გაერთიანდება Buffer.concat()-ით და შედეგი დაიბეჭდება 

const buf1 = Buffer.from('Hello ');
const buf3 = Buffer.from('Buffer!');

const combined = Buffer.concat([buf1, buf3]);

console.log(combined);

console.log(combined.toString());