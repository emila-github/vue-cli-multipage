var Vue = require('vue')
// 定义
var Child = Vue.extend({
  template: '<div>A custom component!</div>'
})

// 注册
var Parent = Vue.extend({
  template: '<div>...:<my-component></my-component></div>',
  components: {
    // <my-component> 只能用在父组件模板内
    'my-component': Child
  }
})


//
//var Parent = Vue.extend({
//  template: '<div>I\'m Parent, My children: <my-component></my-component></div>',
//  components: {
//    'my-component': {
//      template: '<div>A custom component!</div>'
//    }
//  }
//})


// 创建根实例
new Parent({
  el: '#example'
})

