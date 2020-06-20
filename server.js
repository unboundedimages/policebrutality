const express = require('express');
const multer = require('multer')
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORRT = PORT = 8081;
/** Points to the build folder in REACT */
app.use(express.static('build'))
app.use(cors());

const bodyParser = require('body-parser')

// const path = require('path');
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(bodyParser.json());
let theIpIs = "";

app.use(bodyParser.urlencoded({extended: true}));

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



/** Uploads the files to the actual folder */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads')
  },
  filename: function (req, file, cb) {
    // console.log("cb: ",cb );
    console.log("file: ", file);
  console.log("req.ip: ", req.ip); 
    cb(null, new Date() + '-'+'req.ip: '+ req.ip+ ' - ipfrom browser: '  + theIpIs + '-' + file.originalname )
  }
});

// const upload = multer({ storage: storage }).single('file');

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     res.send('ponggo');
  
//   });

const upload = multer({ storage: storage }).single('file');
  
// app.use(cors());

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


/** Post route for the inputs */
app.post('/upload',function(req, res) {
  // console.log("wtf")
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
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
