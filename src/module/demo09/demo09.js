import Vue from 'vue'
require('./d09.css');
var vm = new Vue({
  el: '#demo',
  data: {
    isA: true,
    isB: false,
    classObject: {
      'class-a': true,
      'class-b': true
    }
  }
})

