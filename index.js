require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// customize code
app.get('/tutor',(req,res)=>{
   res.send("nitesh.com")
})

app.get('/login',(req,res)=>{
    res.send(`<h1>please login at nitesh.com</h1>`)
 })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })
  