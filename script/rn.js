#! /usr/bin/env node
var fs = require("fs");
var path = require("path");


/**
 * 递归目录及下面的文件，找出目标文件
 * @param {String} dir 文件夹路径
 */
function readDir(dir) {
  var exist = fs.existsSync(dir);
  // 排除不需要遍历的文件夹或文件
  var excludeDir = /^(\.|node_module|wx|images)/;
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
      let fileName = path.basename(file);
      let fileNameArr = fileName.split('.');
      let fileNameArrFirst = fileNameArr[0];
      if (/^[0-9]*$/.test(fileNameArrFirst) && path.extname(file) === ".md") {
        fileArr.push(pathName);
      }
    }
  }
}

function traverseFile(file) {

  file.length &&
  file.forEach(ele => {
    const fileName = path.basename(ele);
    const dirName = path.dirname(ele);
    const fileNameArr = fileName.split('.');
    const newFileName = `${dirName}/${fileNameArr[0]}.${fileNameArr[1]}.${fileNameArr[0]}.md`;
    fs.rename(ele, newFileName, (err) => {
      if (err) throw err;
      console.log(`${fileName} 重命名完成`);
    });
  });
}


var currentPath = process.cwd(); // 获取当前执行路径
var fileArr = []; // 存储目标文件路径

readDir(currentPath);
traverseFile(fileArr);
