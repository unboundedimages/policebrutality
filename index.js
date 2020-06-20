const express = require('express');
const path = require('path');
const multer = require('multer')
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.static('build'))

const bodyParser = require('body-parser')

// const path = require('path');
const PORRT = PORT = 8081;



// app.use(express.static(path.join(__dirname, 'build')));
// app.use(bodyParser.json());
let theIpIs = "";

app.use(bodyParser.urlencoded({extended: true}));

/** Get the server IP address */

// axios.get('https://api.ipify.org/?format=json')
// .then(response => {
//   console.log(response.data.ip)
//   theIpIs = response.data.ip
//   console.log('This is : ', theIpIs)
//   return theIpIs;
// })
// .catch(error => {
//   console.log(error);
// });



/**upload files to storage */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {

    console.log("cb: ",cb );
    console.log("file: ", file);
      // console.log("Line 44  req.body.filename: ",  req.body.filename)
   
    cb(null, 'src/uploads')
  },
  filename: function (req, file, cb) {
  //  console.log("what is file: ", file)
    // cb(null, Date.now() + '-' + theIpIs + '-' + file.originalname )
    cb(null, Date.now() + '-' + file.originalname )
  }
});

// const upload = multer({ storage: storage }).single('file');

app.get('/*', function (req, res) {
  console.log("get the fuck")
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.send('ponggo');
  
  });



const upload = multer({ storage: storage }).single('file');
  
app.use(cors());

// app.post('/upload', upload, function(req, res) {
//   console.log("wtf")
//   if (req.file)
//   res.json({
//       imageUrl: `images/uploads/${req.file.filename}`
//   });
// else
//   res.status("409").json("No Files to Upload.");
//   // const file = req.file
//   // if (!file) {
//   //   const error = new Error('Please upload a file')
//   //   error.httpStatusCode = 400
//   //   return next(error)
//   // }
//   //   res.send(file)
  
// });

app.post('/upload', function (req, res, next) {
  console.log("req.body: ", req.body)
  console.log(req.headers.referer)
  console.log("wtf")
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }

    console.log("req.body inside upload method line:97: ", req.body)
    console.log("req.file line 100: ", req.body.filename)
    console.log("req.file line 101: ",  req.file)

    return res.status(200).send(req.file)

  })

});

// app.get('/pingo', function (req, res) {
//   console.log("pingpong")
//   res.send('pong');
// });



app.listen(PORRT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORRT)
});
