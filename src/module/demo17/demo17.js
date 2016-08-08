var Vue = require('vue')

// 在一个步骤中扩展与注册
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// 局部注册也可以这么做
var Parent = Vue.extend({
  template: '<div><my-a></my-a></div>',
  components: {
    'my-a': {
      template: '<div>B custom component!</div>'
    }
  }
})

// 创建根实例
new Vue({
  el: '#example'
})
new Parent({
  el: '#examplea'
})

