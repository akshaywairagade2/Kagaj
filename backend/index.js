const express=require('express');
const app=express();
const mongoose=require('mongoose');
const env=require('dotenv');

const authRoutes=require('./routes/auth')

env.config();

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.jy0uzsn.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        // useCreateIndex:true
    }
).then(()=>{
    console.log(`Database Connected`);
});

app.use(express.json());
app.use('/api',authRoutes);

app.listen(process.env.PORT_NUMBER,()=>{
    console.log("Connected");
})