import Vue from 'vue'

var example1 = new Vue({
  el: '#example-1',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo',_uid: '88f869d' },
      { message: 'Bar',_uid: '7496c10' }
    ]
  }
})

//example1.items.push({ message: 'Baz' })


////替换数组
//example1.items = example1.items.filter(function (item) {
//  return item.message.match(/Foo/)
//})


// 对象 v-for
// 提交测试一
// 提交测试二
// 提交测试三
new Vue({
  el: '#repeat-object',
  data: {
    object: {
      FirstName: 'John',
      LastName: 'Doe',
      Age: 30
    }
  }
})