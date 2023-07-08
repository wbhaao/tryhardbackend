const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'react-project/build')));
app.use(express.json());
var cors = require('cors');
app.use(cors());

// 가장 하단에 놓아야 함
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});

app.listen(8080, function () {
  console.log('listening on 8080')
}); 