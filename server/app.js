const express = require('express');
const app = express();

var initFunc = function (req, res, next) {
    console.log('initFunc!');
    res.send('hello~');
    next();
}

var initFunc2 = function (req, res) {
    console.log('initFunc2');
}

app.post('/', initFunc);
app.get('/', initFunc);
app.get('/', initFunc2);

// app.use('/',(req,res,next)=>{
//     console.log(req.url);
//     if(req.url.indexOf('.html')!=-1){
//         res.sendFile(req.url,{root:__dirname});
//     }
//     res.sendFile('/index.html',{root:__dirname});
// });

app.listen(4003, function () {
    console.log("Express start : port[4003]");
});