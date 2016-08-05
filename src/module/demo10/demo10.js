import Vue from 'vue'
require('./d10.css');
var vm = new Vue({
  el: '#demo',
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'blue',
      fontSize: '50px'
    }
  }
})

