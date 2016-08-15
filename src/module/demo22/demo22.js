var Vue = require('vue')

var vm = new Vue({
  el: '#example',
  methods: {
    doGet: function(msg,event) {
      console.log('doGet:' + msg, event);
      $.get('/api/datatable', function(data){
        console.log(data)
      });
      $.post('/api/add.do', function(data){
        console.log(data)
      });
    }
  },
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


