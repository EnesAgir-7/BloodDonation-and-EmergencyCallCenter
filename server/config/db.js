const mongoose = require('mongoose');

const connectDB = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("MongoDb connection Success");
    })
    .catch((err)=>{
        console.log(err.message);
});

module.exports = connectDB;