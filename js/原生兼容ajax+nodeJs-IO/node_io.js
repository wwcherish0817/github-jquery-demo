var http = require('http');
var url = require('url');
var util = require('util');
var fs = require("fs");


http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var getJson = require('url').parse(req.url,true).query.getJson;
    if(getJson){
       if(getJson!=""){
           readFile(res,getJson);
       }
    }
    var wrteJson = require('url').parse(req.url,true).query.wrteJson;
    var toFile = require('url').parse(req.url,true).query.toFile;
    if(wrteJson && toFile){
        if(wrteJson!="" && toFile!=""){
            writeFile(res,toFile,wrteJson);
        }
    }
    //res.end(resJson);
}).listen(3000);

function readFile(res,file){
    fs.readFile("./"+file, function (err, data) {
        if (err) {
            //return console.error(err);
            res.end(err);
        }
         //return data.toString();// console.log("异步读取: " + data.toString());
        res.end(data.toString());
    });
}

function writeFile(res,toFile,writeData){
    fs.writeFile("./"+toFile,writeData,function(err){
        if (err) {
            res.end(err);
        }
        else{
            res.end("SUCESS");
        }
    })
}