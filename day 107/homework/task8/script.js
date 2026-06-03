// 9) შექმენით პროგრამა, სადაც:
// - გაქვთ JavaScript ობიექტი  
// - გადააქცევთ JSON-ად JSON.stringify()-ით  
// - ჩაწერთ ახალ ფაილში  
// - და შემდეგ წაიკითხავთ და დაბეჭდავთ მას

const fs = require("fs");

const student = {
    name: "Giorgi",
    age: 20,
    course: "Node.js"
};

const jsonData = JSON.stringify(student, null, 2);

fs.writeFile("student.json", jsonData, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    fs.readFile("student.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
});