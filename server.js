const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const app = express();
const bodyParser = require('body-parser');
//const Users = require('./modules/User');
//const { mongoURI } = require('./config/keys');
//const db = require('./config/keys').mongoURI;
//const MongoClient = require('mongodb').MongoClient;

/*mongoose.connect(db).then(() => console.log('Mongodb connected'))
.catch(err => console.log(err));
*/
mongoose.connect("mongodb://localhost:27017/users",{useNewUrlParser: true},(error) => {
    if(!error){
        console.log("Success");
    }else{
        console.log("error in connecting")
    }
});

app.get('/',(req,res) => res.send("hello world"));

//var dbName = 'nodejs';
//const url = 'mongodb://localhost:27017';
//const mongoURI = url + '/'+ dbName;


//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/users',users);
app.use('/api/profile',profile);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//app.listen(port, () => console.log ('Server running on port ${port}'));
