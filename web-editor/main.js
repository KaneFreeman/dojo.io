(function(e){if(typeof module==="object"&&typeof module.exports==="object"){var r=e(require,exports);if(r!==undefined)module.exports=r}else if(typeof define==="function"&&define.amd){define(["require","exports","./Editor","./project","./Runner"],e)}})(function(e,r){"use strict";var t=e("./Editor");var o=e("./project");var n=e("./Runner");return{Editor:t.default,project:o.default,Runner:n.default}});