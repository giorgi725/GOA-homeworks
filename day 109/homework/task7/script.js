// 8) ახსენით როგორ ვუკავშირდებით სხვა API-ს Node.js-ში (http/https module), რა არის request გაგზავნა და response მიღება. მოიყვანეთ მარტივი მაგალითი

// Node.js-ში სხვა API-სთან დასაკავშირებლად ვიყენებთ http ან https მოდულებს.

// Request (მოთხოვნა) — როდესაც ჩვენი პროგრამა აგზავნის მოთხოვნას სხვა სერვერთან.
// Response (პასუხი) — მონაცემები, რომლებსაც სერვერი გვიბრუნებს მოთხოვნის დამუშავების შემდეგ.

// თუ API მუშაობს HTTPS პროტოკოლით, ვიყენებთ https მოდულს, ხოლო HTTP-ის შემთხვევაში — http მოდულს.

// API-სთან მუშაობის პროცესი
// ვაგზავნით Request-ს.
// სერვერი ამუშავებს მოთხოვნას.
// ვიღებთ Response-ს.
// ვამუშავებთ მიღებულ მონაცემებს.

// const https = require("https");

// https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => {
//     let data = "";

//     res.on("data", (chunk) => {
//         data += chunk;
//     });

//     res.on("end", () => {
//         console.log(data);
//     });
// });