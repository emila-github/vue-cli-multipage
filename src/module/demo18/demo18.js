var Vue = require('vue')
// 定义
Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})




// 创建根实例
new Vue({
  el: '#example',
  data: {
    parentMsg: 'Message from parent'
  }
})


//new Vue({
//  el: '#example',
//  data: {
//    parentMsg: 'Message from parent'
//  },
//  components: {
//    child: {
//      props: ['myMessage'],
//      template: '<span>{{myMessage}}</span>'
//    }
//  }
//})

