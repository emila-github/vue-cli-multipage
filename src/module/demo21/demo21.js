var Vue = require('vue')

var vm = new Vue({
  el: '#example',
  data: {
    msg: '123'
  },
  computed: {
    example: {
      cache: false,
      get: function () {
        return Date.now() + this.msg
      }
    }
  }
})

vm.msg = 'new message' // 修改数据
console.log(vm.$el.textContent === 'new message')// false
vm.$log()
Vue.nextTick(function () {
  vm.$el.textContent === 'new message' // true
  console.log(vm.$el.textContent === 'new message')
})


