import express from 'express'
const app = express()
const port = process.env.PORT ||3000

app.get('/', (req, res) => {
    console.log('hello my dear friends:'+ req.ip);

  res.send('Hello World!',+ req.ip);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})