import Vue from 'vue'
require('./type.css');
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!' + require('./index')
  }
})