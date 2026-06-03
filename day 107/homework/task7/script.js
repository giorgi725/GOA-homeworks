// 8) დაწერეთ პროგრამა, სადაც:
// - წაიკითხავთ .json ფაილს fs.readFile()-ით  
// - გადააქცევთ მას ობიექტად JSON.parse()-ით  
// - შეცვლით ერთ-ერთ მნიშვნელობას  
// - დააბრუნებთ ისევ JSON ფორმატში JSON.stringify()-ით  
// - შეინახავთ ფაილში fs.writeFile()-ით

const fs = require("fs");

fs.readFile("user.json", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const user = JSON.parse(data);
    console.log(user);
    user.age = 21;
    const updatedJson = JSON.stringify(user, null, 2);
    fs.writeFile("user.json", updatedJson, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});