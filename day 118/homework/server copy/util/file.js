const fs = require('fs');
const path = require('path');

const readData = (file_url) => {
    const data = fs.readFileSync(file_url, 'utf-8', (err, info) => {
        if(err) {
            console.log(err)
        }
        return info
    })
    return JSON.parse(data)
}

const writeData = (data, file_url) => {
    const info = readData(file_url);
    info.push(data)
    fs.writeFileSync(file_url, JSON.stringify(info))
}

module.exports = {readData, writeData}