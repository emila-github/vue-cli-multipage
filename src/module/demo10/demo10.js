import Vue from 'vue'
require('./d10.css');
var vm = new Vue({
  el: '#demo',
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'blue',
      fontSize: '50px',
      'text-align': 'left'
    },
    styleObjectA: {
      color: 'yellow'
    },
    styleObjectB: {
      fontSize: '50px',
      'text-align': '-webkit-left',
      transitionDelay: 'inherit'    //当 v-bind:style 使用需要厂商前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。
    }
  }
})

