const express=require('express');
const app=express();
const cors=require('cors');
const PORT=3000;
app.use(cors({
    origin:'*'
}));


app.listen(console.log(`server is runnin on port${PORT}`));




