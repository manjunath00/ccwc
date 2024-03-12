const fs = require('fs');
const readLine = require('readline')

const filePath = './test.txt';
const fileStream = fs.createReadStream(filePath, 'utf-8')

fs.stat(filePath, (err, stats) => {
    console.log("Size of the file is ", stats.size)
})

const r1 = readLine.createInterface({
    input: fileStream,
    crlfDelay: Infinity
})

let count = 0;
let words = 0
r1.on('line', (line) => {
    count += 1
    if (line.trim().length == 0) return 
    // console.log(line?.trim().split(' ')?.map(item => item?.trim()).filter(item => item.length > 0))
    words += line?.split(/\s+/).map(item => item.trim()).filter(item => item.length > 0)?.length
})

r1.on('close', () => {
    console.log("line count is ", count)
    console.log("word count is ", words)
})