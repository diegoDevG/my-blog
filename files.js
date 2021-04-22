const fs = require('fs');

//readin files

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) { console.log(err) }
    console.log(data.toString())
})

//write files

fs.writeFile('./docs/blog2.txt', 'hello ninjas', () => {
    console.log('files was writen')
})

//directory
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) console.log(err)
        console.log('folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) console.log(err)
        console.log('folder deleted')
    })
}

//deleting files
