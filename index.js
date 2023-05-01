const express =require('express');
const app=express();
const cors=require('cors')
const port=process.env.PORT||5000;
const chefData= require('./data/chefData.json')

app.use(cors())

app.get('/',(req, res)=>{
    res.send('Chef Server side running')

})
app.get('/allData',(req,res)=>{
    res.send(chefData)
})

app.listen(port,()=>{
    console.log(`chef is running on port:${port}`)
})