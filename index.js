const express = require('express')
const path = require('path')
const app = express()
const port = 3000

var contactList = [
  {
      name: "Rio",
      phone: "1111111111"
  },
  {
      name: "Tony Stark",
      phone: "1234567890"
  },
  {
      name: "Richard",
      phone: "12131321321"
  }
]

app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index',{
    title: "node class"
  })
})
// contact list
app.get('/viewlisst', (req, res) => {
  res.render('index',{
    title: "contact",
    list:{
      name: contactList
    }
  })
})
// app.use(path.join(__dirname, 'public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})