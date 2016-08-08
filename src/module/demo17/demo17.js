var Vue = require('vue')

// 在一个步骤中扩展与注册
Vue.component('my-component', {
  props:['d1'],
  template: '<div>A custom component{{d1}}!</div>'
})

// 局部注册也可以这么做
var Parent = Vue.extend({
  template: '<div><my-a d2="parent"></my-a></div>',
  components: {
    'my-a': {
      props:['d2'],
      template: '<div>B custom component{{d2}}!</div>'
    }
  }
})

// 创建根实例
new Vue({
  el: '#example',
  data:{
    d1:'d1'
  }
})
new Parent({
  el: '#examplea'
})

new Vue({
  el: '#exampleb'
})

