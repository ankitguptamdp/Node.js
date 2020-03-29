var _ = require('underscore');
// require searches the input in following order:
// 01. Core module :
// ('underscore') At first it assumes it as a Core Module
// 02. File or Folder :
// ('./underscore') There after it considers it as a File or folder in this project underscore.js or underscore/index.js
// 03. node_modules :
//  It assumes that it is available in node_modules

var result = _.contains([1, 2, 3], 2);
console.log(result);