/* eslint-disable no-unused-vars */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Bluebird = require("bluebird");
const cors = require("cors");
const mongoose = require('mongoose');
const { printTime, bodyParser, authenticate } = require('./middleware.js');
const { SECRET_KEY, DATABASE_URL } = require('./secret.js');
const { HTTP_CREATED, HTTP_UNAUTHORIZED, HTTP_BAD_REQUEST, HTTP_SERVER_ERROR } = require('./constants.js');
const { User, usersSchema } = require('../Database/db');

const app = express();
var port = process.env.PORT || 3000


//MiddleWare
app.use(printTime);
app.use(bodyParser);
app.use(cors());



app.get('/' , function(req, res){

    res.send("Hello World From the server");
})

//Returns all places from the database
// app.get('/SignIn' , authenticate , function(req, res){
 
//  const first=   req.body.first_name;
//     const last= req.body.last_name;
//     const email= req.body.email;
//      const password= req.body.password;

  
//   usersSchema.find({frist_name : first}).then(function(usersSchema){
//     return res.send({ usersSchema :usersSchema});
// }).catch(function(err){
//     return res.status(HTTP_SERVER_ERROR).send({error : 'Server Error'});
// })

// });


//Add new thing to the  database


// app.post('/SignIn' , authenticate , function(req , res){
//     const usersSchema = {first_name : }
// })




//create new user in the database

app.post('/signup' , function(req, res){

    console.log(req.body);
    
    const firstName=   req.body.firstName;
         const lastName= req.body.lastName;
         const email= req.body.email;
          const password= req.body.password;

          const hashedPassword = bcrypt.hashSync(password , 10);
        usersSchema.create({firstName : firstName , lastName : lastName , email : email , password : hashedPassword}).then(function(){
            return res.status(HTTP_CREATED).send('Sign Up Successfull');
        }).catch(function(err){
            if(err.code === 11000){
                res.status(HTTP_BAD_REQUEST).send("This username is already taken");
            
            } 
            return res.status(HTTP_SERVER_ERROR).send('Server Error');
                
        });

    res.send("Hello World");

});


app.post('/signin' , function(req , res){

    const username = req.body.username;
    const password = req.body.password;

    //Check if user exists in the database
    this.User.findOne({username : username}).then(function(user){
        if(!user) {
            return res.status(HTTP_UNAUTHORIZED).send({error : 'Please sign up'})
        }

        //Compare with stored password

        const existingHasedPassword = user.password;
        bcrypt.compare(password , existingHasedPassword).then(function(isMatching){

            if(isMatching) {
                //Create a token and send to client
                const token = jwt.sign({username : user.username}, SECRET_KEY , {expiresIn : 4000});
                return res.send({token : token});
            }else {
                return res.status(HTTP_UNAUTHORIZED).send({error : 'Wrong Password'});
            }
        });
    });

    
});


function completedWork(value){
    console.log(`I am done! I worked readlly hard for ${value} seconds`);
}


function doSomething(type , seconds){
    return new Bluebird(function(resolve , reject) {
        let count = 0 ;
        console.log(`I am ${type} hard`);
        setTimeout(function(){
            count += seconds;
            reject(count);

        }, 1000 * seconds
        );
    });
};


app.get('/random' , function(req ,res){
    doSomething('coding' , 3).then(count => {
        completedWork(count);
        res.send('Done')
    }).catch(count => {
        completedWork(count);
        res.send('Done In Catch');
    })
})













//Database Connection
const mongoURI = 'mongodb://localhost:27017/myNewData'

mongoose
    .connect(mongoURI, { useNewUrlParser: true ,  useCreateIndex: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

// var Users = require('../routes/Users')
// app.get('/' , (req,res) =>{
//     res.send("Hlelo Worlddsd");
// })
// app.use('/users', Users)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})