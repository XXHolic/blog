#! /usr/bin/env node
const tinify = require("tinify");
var fs = require("fs");
var path = require("path");

tinify.key = "";
/**
 * 递归目录及下面的文件，找出目标文件
 * @param {String} dir 文件夹路径
 */
function readDir(dir) {
  var exist = fs.existsSync(dir);
  // 排除不需要遍历的文件夹或文件
  var excludeDir = /^(\.|node_module|wx)/;
  if (!exist) {
    console.error("目录路径不存在");
    return;
  }
  var pa = fs.readdirSync(dir);

  for (let index = 0; index < pa.length; index++) {
    let file = pa[index];
    var pathName = path.join(dir, file);
    var info = fs.statSync(pathName);
    if (info.isDirectory() && !excludeDir.test(file)) {
      readDir(pathName);
    } else {
      let fileExt = path.extname(file);

      if (fileExt === ".png" || fileExt === ".jpg" || fileExt === ".jpeg") {
        fileArr.push(pathName);
      }
    }
  }
}

function traverseFile(file) {

  file.length &&
    file.forEach(ele => {
      dealFile(ele);
    });
}

function dealFile(filePath) {
  var fileName = path.basename(filePath);

  const source = tinify.fromFile(filePath);
  console.info(`${fileName}压缩中~~~`);
  source.toFile(filePath,function() {
    console.info(`${fileName}压缩完成`);
  });


}

var currentPath = "./draft/images"; // 获取当前执行路径
var fileArr = []; // 存储目标文件路径

readDir(currentPath);
traverseFile(fileArr);
