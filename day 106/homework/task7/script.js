// 8) შექმენით პროგრამა, სადაც:
// - შეამოწმებთ არსებობს თუ არა ფოლდერი (fs.existsSync)  
// - თუ არ არსებობს → შექმნით fs.mkdir()-ით  
// - თუ არსებობს → დაბეჭდავთ შესაბამის შეტყობინებას

const fs = require('fs');

const folderName = 'blalalalv';

if (fs.existsSync(folderName)) {
    console.log('ფოლდერი უკვე არსებობს!');
} else {
    console.log('ფოლდერი არ არსებობს');

    fs.mkdir(folderName, (err) => {
        if (err) {
            console.log(err.message);
            return;
        }

        console.log('ფოლდერი შეიქმნა');
    });
}