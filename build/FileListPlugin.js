const fs = require('fs')
const path = require('path')
let dir = ''
function FileListPlugin(options) {
    console.log(options)
    console.log('fielListPlugin......')
    dir = options.dir
    console.log(dir)

}
FileListPlugin.prototype.apply = function(compiler) {


  compiler.plugin('compilation', function(...res) {
    console.log('________compilation________')
  })


  compiler.plugin('compile', function(...res) {
    console.log('________compile________')
  })

  compiler.plugin('done', function (state) { 
    console.log('___________done________')
   })
  compiler.plugin('emit', function(compilation, callback) {
    console.log('&&&&&&&&&-----emit------%%%%%%%%%%')
    // 在生成文件中，创建一个头部字符串：
    var filelist = 'In this build:\n\n';

    // 遍历所有编译过的资源文件，
    // 对于每个文件名称，都添加一行内容。
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
    }
    fs.writeFile(path.join(dir, './filenamelist.md'), filelist, function(err) {
      if (err) {
        console.log("写入错误！")
      } else {
        console.log('写入成功~')
      }
    } )
    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};

module.exports = FileListPlugin;