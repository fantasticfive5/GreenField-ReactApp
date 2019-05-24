const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { users, shop } = require("../Database/db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pino = require('express-pino-logger')();

const url = 'mongodb://localhost:3000'
 
mongoose.connect(url, { useNewUrlParser: true }).then(connection => {
  console.log('You are connected to mongo Database :)');
}).catch(function(err){
  console.log(err);
});
const app = express();
// const db = require('../database-mongo/dbmongo');

// const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(pino);
app.use(express.static(__dirname + '/../react-client/dist'));



// app.get('/', function (req, res) {
//   users.find(function (err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//       console.log(data)
//     }
//   });
// });


app.get('/' , function(req , res){
   
  res.send("Hi ...");
});



app.post('/signinUser', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(password)
  users.create({email: email, password : password})
  .then(() => {
    return res.send({done : "successful"})
  }).catch((err) => {
      return res.status(HTTP_SERVER_ERROR).send({error: 'Server Error'})
  })
  console.log(email)
  console.log("ok")
  res.send({
      done: "successful"
  })


});
// rawan-azzam  
app.post('/signUp', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const passowrdHash = bcrypt.hashSync(password, 8);
  // users.create({ username: { firstName: firstName, lastName: lastName }, email : email, password: passowrdHash }).then(function () {
  //   console.log("Sign Up");
  //   return res.status(HTTP_Created).send("Sign up successful");
  // }).catch(function (err) {
  //   if (err.code === 11000) {
  //     return res.status(HTTP_BAD_REQUEST).send("You can't use this username")
  //   }
  //   return res.status(HTTP_SERVER_ERROR).send('Server Error');
  // });
  // console.log("ok")
  // res.send("Done")
  console.log( firstName, lastName, email, password)
});

app.post('/signinClient', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  users.findOne({ firstName: firstName }).then(function (user) {
    if (!userName) {
      return res.status(HTTP_UNAUTHORIZED).send({ error: "You Can Sign Up Here" });
    }
    const existPass = userName.password;
    bcrypt.compare(password, existPass).then(function (Matching) {
      if (Matching) {
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: 5000 });
        return res.send({ token: token });
      } else {
        return res.status(HTTP_UNAUTHORIZED).send({ error: 'Incorrect password' });
      }
    });
  });
  
});
    








app.post('/SignUp', function(req , res){
  const first = req.body;
  db.save(first);
  return res.send(first);
   

});

app.get('/SignIn', function (req, res) {
  // TODO - your code here!sa
  // This route should send back the top 25 repos
  db.Repo.find({}).exec(function(err, data){
 	res.send(data);
 })
});

let port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_UNAUTHORIZED = 401;

const HTTP_SERVER_ERROR = 500;

// exports.HTTP_CREATED = HTTP_CREATED;
// exports.HTTP_BAD_REQUEST = HTTP_BAD_REQUEST;
// exports.HTTP_UNAUTHORIZED = HTTP_UNAUTHORIZED;
// exports.HTTP_SERVER_ERROR = HTTP_SERVER_ERROR;







const authenticate = function(req, res, next){
  const token = req.headers['x-access-token']; //Username encoded in token
  if(!token){
      return res.status(HTTP_UNAUTHORIZED).send('Please sign in');
  }
  jwt.verify(token, SECRET_KEY, function(err, decodedToken){
     
      if(err){
        return res.status(HTTP_UNAUTHORIZED).send('Please sign in');
     }
     
      const username = decodedToken.username;
      User.findOne({username: username}).then(function(user){
          console.log(user);
          if(!user){
              return res.status(HTTP_UNAUTHORIZED).send('Please sign up');
          }
          req.body.user = user; 
          return next();
      }).catch(function(err){
          return res.status(HTTP_SERVER_ERROR).send(err);
      })
  });
};
