const express= require('express')

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
const port =3000
app.listen(port,(req,res)=>{console.log(`server is running on http://localhost:${port}`)})