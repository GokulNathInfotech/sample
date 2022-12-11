const express =require('express')

const app=express()


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(9090,()=>{
    console.log(`listing port http://localhost:9090`)
})