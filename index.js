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

app.get('/allData/:id',(req,res)=>{
    const id=req.params.id;
    const selectedData=chefData.find(pb=>pb.id==id)
    res.send(selectedData)
})

app.listen(port,()=>{
    console.log(`chef is running on port:${port}`)
})