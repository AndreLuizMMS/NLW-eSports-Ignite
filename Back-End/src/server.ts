import express from "express"

const app = express()

app.get('/perfil', (req, res) => {
  return res.json([
    { id: 1, ad: 'game 1' },
    { id: 2, ad: 'game 2' },
    { id: 3, ad: 'game 3' },
    { id: 4, ad: 'game 4' }
  ])
})


// localhost:3333/perfil
app.listen(3333)