const express = require('express')
const app = express()



app.set("view engine","pug")
app.set("views", __dirname);
app.get('/', function (req, res) {
    res.render("template", {
        heading: "Npm Testing Webpage",
        content: "This is Qingyuan's first npm project",
        label: "Contact Qingyuan for More Information",
        url:"/contact",
        title: "Hey, Welcome to Qingyuan's Website"
    })
    // res.sendFile(__dirname+"/home.html");
})


app.get('/contact', function(req,res){
    res.render("template", {
        title: "How to Reach Out for Qingyuan",
        heading: "Contact information",
        content: "Please contact me through the following methods",
        label:"Via Email",
        url:"qingyuan1998@hotmail.com",
    })
})

app.listen(3000)