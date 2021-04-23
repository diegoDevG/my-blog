const { render } = require('ejs')
const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')


const app = express()

//connect to mongodb
const dbURI = 'mongodb+srv://netninja:ninja123@ninja-node.jxpak.mongodb.net/ninja-node?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) //second parameter is for avoid deprecation warning
    .then((result) => {
        console.log('connected successfully to db')
        app.listen(3000) // listen for requests
    })
    .catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs')





//middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog Entry 2',
//         snippet: 'About my new blog',
//         body: 'More about my new blog created using node, express and mongodb'
//     })

//     blog.save()
//         .then((result) => res.send(result))
//         .catch((err) => console.log(err))
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => res.send(result))
//         .catch((err) => console.log(err))
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('6082466a6860dd9fdc98d6bc')
//         .then((result) => res.send(result))
//         .catch((err) => console.log(err))
// })

//routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

//redirects
app.get('/abotu-us', (req, res) => {
    res.redirect('about')
})


//blog routes 
app.use('/blogs', blogRoutes)

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});