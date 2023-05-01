const express =require('express');
const app=express();
const port=process.env.PORT||5000;


app.get('/',(req, res)=>{
    res.send('Chef Server side running')

})

app.listen(port,()=>{
    console.log(`chef is running on port:${port}`)
})