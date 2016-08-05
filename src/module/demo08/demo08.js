import Vue from 'vue'
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  }
})

vm.$watch('firstName', function (val) {
  this.fullName = val + ' ' + this.lastName
})

vm.$watch('lastName', function (val) {
  this.fullName = this.firstName + ' ' + val
})


var vm2 = new Vue({
  el: '#demo2',
  data: {
    firstName: 'Foo2',
    lastName: 'Bar2'
  },
  computed: {
    fullName2: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})


var vm3 = new Vue({
  el: '#demo3',
  data: {
    firstName: 'Foo3',
    lastName: 'Bar3'
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})