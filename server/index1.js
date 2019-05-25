const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { users, shop } = require("../Database/db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pino = require('express-pino-logger')();
const SECRETK = require("./secret.js")

const url = 'mongodb://localhost:3000'

mongoose.connect(url, { useNewUrlParser: true }).then(connection => {
  console.log('You are connected to mongo Database :)');
}).catch(function (err) {
  console.log(err);
});
const app = express();

const port = process.env.PORT || 27017;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(pino);
app.use(express.static(__dirname + '/../react-client/dist'));

const saltRounds = 5;
const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_UNAUTHORIZED = 401;
const HTTP_SERVER_ERROR = 500;

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


app.get('/', function (req, res) {

  res.send("Hi ...");
});


//posting from the front-end to the database
app.post('/signupuser', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const hashedpassword = bcrypt.hashSync(password, saltRounds)

  console.log(password)
  users.findOne({ email: email }).then((data) => {
    if (data) {
      console.log("Email already exists!")
      return res.send("email is already taken!, Please sign in with the same email or use another email.")
    } else {
      users.create({ firstName: firstName, lastName: lastName, email: email, password: hashedpassword })
        .then(() => {
          return res.send({ done: "successful" })
        }).catch((err) => {
          return res.status(HTTP_SERVER_ERROR).send({ error: 'Server Error' })
        })
    }
  })

});

//posting from the front-end to the database
app.post('/signinuser', (req, res) => {
  //assigning the entered information to to variables
  const email = req.body.email;
  const password = req.body.password;
  //we need to search for the email in our database
  users.findOne({ email: email }).then((data) => {
    //check if the user/data is registered in our database
    if (!data) {
      return res.status(HTTP_UNAUTHORIZED).send({ error: 'Please sign up :)' });
    }
    //check if the crypted password is strictly equals the regsitered password
    const checkPass = data.password
    bcrypt.compare(password, checkPass).then((matching) => {
      //if it's a match create a token
      if (matching) {
        const token = jwt.sign({ email: data.email }, SECRETK.SECRET_KEY, { expiresIn: "1h" });
        return res.send({ token: token });
      } else {
        return res.status(HTTP_UNAUTHORIZED).send({ error: "Password is incorrect" })
      }
    })
  })
});

//posting from the front-end to the database
app.post('/signupshop', (req, res) => {
  const shopname = req.body.shopname;
  const shoplocation = req.body.shoplocation;
  const workkinghour = req.body.workkinghour;
  const specialties = req.body.specialties;
  const phoneNumber = req.body.phoneNumber;

  shop.findOne({ phoneNumber: phoneNumber }).then((data) => {
    if (data) {
      console.log("Email already exists!")
      return res.send("phoneNumber is already taken!, Please sign up using another phoneNumber.")
    } else {
      shop.create({
        email: email,
        shopname: shopname,
        shoplocation: shoplocation,
        workkinghour: workkinghour,
        specialties: specialties,
        phoneNumber: phoneNumber
      })
        .then(() => {
          return res.send({ done: "Signed up successfully" })
        }).catch((err) => {
          return res.status(HTTP_SERVER_ERROR).send({ error: 'Server Error' })
        })
    }
  })
});


const authenticate = function (req, res, next) {
  const token = req.headers['x-access-token']; //Username encoded in token
  if (!token) {
    return res.status(HTTP_UNAUTHORIZED).send('Please sign in');
  }
  jwt.verify(token, SECRET_KEY, function (err, decodedToken) {
    if (err) {
      return res.status(HTTP_UNAUTHORIZED).send('Please sign in');
    }
    const username = decodedToken.username;
    User.findOne({ username: username }).then(function (user) {
      console.log(user);
      if (!user) {
        return res.status(HTTP_UNAUTHORIZED).send('Please sign up');
      }
      req.body.user = user;
      return next();
    }).catch(function (err) {
      return res.status(HTTP_SERVER_ERROR).send(err);
    })
  });
};

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
