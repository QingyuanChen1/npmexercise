const express = require('express')
const app = express()



app.set("view engine","pug")
app.set("views", __dirname);
app.get('/', function (req, res) {
    res.render("template", {
        heading: "Welcome",
        content: "John Doe is a Toronto-based creative",
        label: "Contact John",
        url:"/contact",
        title: "Welcome to John Doe's Website"
    })
    // res.sendFile(__dirname+"/home.html");
})


app.get('/contact', function(req,res){
    res.render("template", {
        heading: "Contact information",
        content: "Please contact me through Email",
        label: "Contact John",
        url:"johndoe@gmail.com",
        title: "John Doe's Personal informaiton"
    })
})

app.listen(3000)