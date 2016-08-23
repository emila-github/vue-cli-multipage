let getFirstObj = require('./getFirstObj')
let a = require('./a')

a()
getFirstObj('.item', function(el){
  console.log(el.html());
})



