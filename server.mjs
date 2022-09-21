import express from 'express'
const app = express()
const port = process.env.PORT ||3000

app.get('/', (req, res) => {
    console.log('response from jamal computer:'+ req.ip);
res.send('response from jamal computer')
  res.send('Hello World!',+ req.ip);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})