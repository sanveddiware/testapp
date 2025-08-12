require('dotenv').config();

const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Sanved Diware')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Hello</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>Chat with code</h1>');
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})
