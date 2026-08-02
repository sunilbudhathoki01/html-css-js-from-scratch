const button=document.getElementById('fetchBtn')
button.addEventListener('click',async()=>{
    const language=document.getElementById('language').value
    const format=document.getElementById('format').value
    const encoding=document.getElementById('encoding').value
     

    const response=await fetch('api/resource',{headers:{
        "Accept":language,
        "Accept-Format":format,
        "Accept-Encoding":encoding
        }

    })
    const data=await response.json()

    document.getElementById("response").textContent =
        JSON.stringify(data, null, 2);
})