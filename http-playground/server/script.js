const { json } = require("express")

document.getElementById('send').addEventListener('click',async()=>{
    const res=await fetch('api/test')
    const data=res.json()

    document.getElementById('output').textContent=JSON.stringify(data,null,2)
    
})

