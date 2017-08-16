"use strict";
exports.__esModule = true;
const express = require("express"),
      multer  = require("multer")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage });
const app = express();
app.use('/background', express.static('uploads'));
app.post('/uploadimg', upload.array('imgfile', 40), function(req, res, next) {
  const files = req.files
  res.set('Access-Control-Allow-Origin','*');
  if (!files[0]) {
    res.send('error');
  } else {
    res.send(`http://127.0.0.1:9999/background/${files[0].filename}`);
  }
  console.log(files);
})

const server = app.listen(9999, 'localhost', function() {
  console.log('服务正在监听9999端口!');
});