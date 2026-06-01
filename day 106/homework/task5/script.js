// 6) ახსენით რა არის FS Module, რა ოპერაციებისთვის გამოიყენება (read, write, append, rename, delete) და რა განსხვავებაა synchronous და asynchronous მეთოდებს შორის

// FS (File System) module არის Node.js-ის core მოდული, რომელიც გამოიყენება ფაილებთან სამუშაოდ.

// მისი საშუალებით შეგვიძლია:

// ფაილის წაკითხვა
// ჩაწერა
// დამატება
// სახელის შეცვლა
// წაშლა

// const fs = require('fs');

// Async:
// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// Write (ფაილში ჩაწერა)
// fs.writeFile('file.txt', 'Hello Node.js', (err) => {
//     if (err) console.log(err);
//     else console.log('File written!');
// });

// ქმნის ფაილს ან ანაცვლებს შიგთავსს

// Append (მიმატება ფაილში)
// fs.appendFile('file.txt', '\nNew line', (err) => {
//     if (err) console.log(err);
//     else console.log('Data appended!');
// });

// ამატებს ახალ ტექსტს ფაილის ბოლოს

// Rename (სახელის შეცვლა)
// fs.rename('file.txt', 'newfile.txt', (err) => {
//     if (err) console.log(err);
//     else console.log('File renamed!');
// });

// Delete (ფაილის წაშლა)
// fs.unlink('file.txt', (err) => {
//     if (err) console.log(err);
//     else console.log('File deleted!');
// });