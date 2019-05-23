const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { userName } = require('./database-mongo/dbmongo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
//Update-Projec

// const app = express();
// const db = require('../database-mongo/dbmongo');

const port = process.env.PORT || 3000;
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../react-client/dist'));



// // app.get('/', function (req, res) {
// //   items.selectAll(function (err, data) {
// //     if (err) {
// //       res.sendStatus(500);
// //     } else {
// //       res.json(data);
// //       console.log(data)
// //     }
// //   });
// // });


// app.get('/' , function(req , res){
   
//   res.send("Hello WOrld");
// });

app.post('/signinShop', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("ok")
  res.send("Done")


});
// rawan-azzam  
app.post('/signUpClient', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const passowrdHash = bcrypt.hashSync(password, 10);
  userName.create({ firstName: firstName, lastName: lastName ,userName:userName,email:email, password: passowrdHash }).then(function () {
    return res.status(200).send("Sign up successful");
  }).catch(function (err) {
    if (err.code === 11000) {
      return res.status(401).send("You can't use this username")
    }
    return res.status(500).send('Server Error');
  });
  console.log("ok")
  res.send("Done")
});

app.post('/signinClient', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  userName.findOne({ firstName: firstName }).then(function (user) {
    if (!userName) {
      return res.status(401).send({ error: "You Can Sign Up Here" });
    }
    const existPass = userName.password;
    bcrypt.compare(password, existPass).then(function (Matching) {
      if (Matching) {
        const token = jwt.sign({ username: user.username }, 'rawan', { expiresIn: 5000 });
        return res.send({ token: token });
      } else {
        return res.status(401).send({ error: 'Incorrect password' });
      }
    });
  });
  
});

// const authenticate = function(req, res, next){
//   const token = req.headers['x-access-token']; //Username encoded in token
//   if(!token){
//       return res.status(401).send('Please sign in');
//   }
//   jwt.verify(token, "SECRET_KEY", function(err, decodedToken){
     
//       if(err){
//         return res.status(401).send('Please sign in');
//      }
     
//       const username = decodedToken.username;
//       User.findOne({username: username}).then(function(user){
//           console.log(user);
//           if(!user){
//               return res.status(401).send('Please sign up');
//           }
//           req.body.user = user; 
//           return next();
//       }).catch(function(err){
//           return res.status(500).send(err);
//       })
//   });
// };

app.listen(port, function () {
      console.log(`listening on port ${port}`);
    });






   
