const mongoose = require('mongoose');

mongoose.set("strictQuery", true)
  .connect('mongodb://127.0.0.1:27017/test-imagine', {
    autoIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4,
  })
  .then(() => console.log('Db is connected'))
  .catch((err) => console.log(err));
