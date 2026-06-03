// 7) ახსენით რა არის JSON Node.js-ში, რა არის JSON.parse() და JSON.stringify(), როდის ვიყენებთ მათ (ფაილებთან მუშაობისას, API-ებთან). მოიყვანეთ მარტივი მაგალითი


// JSON (JavaScript Object Notation) არის მონაცემების შენახვისა და გადაცემის მსუბუქი ტექსტური ფორმატი.

// JSON ხშირად გამოიყენება:

// API-ებთან მუშაობისას
// კონფიგურაციის ფაილებში
// მონაცემების ფაილებში შესანახად (.json)


// JSON.parse() JSON სტრიქონს (string) გარდაქმნის JavaScript ობიექტად.

// const jsonData = '{"name":"Giorgi","age":17}';

// const user = JSON.parse(jsonData);

// console.log(user);
// console.log(user.name);


// JSON.stringify() JavaScript ობიექტს გარდაქმნის JSON სტრიქონად.

// მაგალითი:

// const user = {
//     name: "Giorgi",
//     age: 20
// };

// const jsonString = JSON.stringify(user);

// console.log(jsonString);