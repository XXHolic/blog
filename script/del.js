#! /usr/bin/env node
var fs = require("fs");
// var path = require("path");

var bkyFilePath = "./draft2/bky";
var jjFilePath = "./draft2/jj";
var sfFilePath = "./draft2/sf";
var originFilePath = "./draft2/origin";

function delDir(path){
  let files = [];
  if(fs.existsSync(path)){
      files = fs.readdirSync(path);
      files.forEach((file, index) => {
          let curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()){
              delDir(curPath); //递归删除文件夹
          } else {
              fs.unlinkSync(curPath); //删除文件
          }
      });
      fs.rmdirSync(path);
  }
}



delDir(bkyFilePath);
delDir(jjFilePath);
delDir(sfFilePath);
delDir(originFilePath);