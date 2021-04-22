const express = require('express')

const app = express()

//register view engine
app.set('view engine', 'ejs')


// listen for requests
app.listen(3000)


app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname })
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' })
})

//redirects
app.get('/abotu-us', (req, res) => {
    res.redirect('about')
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' })
})

// 404 page    
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404')
})