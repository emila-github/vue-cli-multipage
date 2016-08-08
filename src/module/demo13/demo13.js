import Vue from 'vue'

require('./style.css');

//Vue.transition('expand', {
//
//  beforeEnter: function (el) {
//    el.textContent = 'beforeEnter'
//  },
//  enter: function (el) {
//    el.textContent = 'enter'
//  },
//  afterEnter: function (el) {
//    el.textContent = 'afterEnter'
//  },
//  enterCancelled: function (el) {
//    // handle cancellation
//  },
//
//  beforeLeave: function (el) {
//    el.textContent = 'beforeLeave'
//  },
//  leave: function (el) {
//    el.textContent = 'leave'
//  },
//  afterLeave: function (el) {
//    el.textContent = 'afterLeave'
//  },
//  leaveCancelled: function (el) {
//    // handle cancellation
//  }
//})


new Vue({
  el: '#demo',
  data: {
    show: true,
    transitionState: 'fade'
  },
  transitions: {
    expand: {
      beforeEnter: function (el) {
        el.textContent = 'beforeEnter'
      },
      enter: function (el) {
        el.textContent = 'enter'
      },
      afterEnter: function (el) {
        el.textContent = 'afterEnter'
      },
      beforeLeave: function (el) {
        el.textContent = 'beforeLeave'
      },
      leave: function (el) {
        el.textContent = 'leave'
      },
      afterLeave: function (el) {
        el.textContent = 'afterLeave'
      }
    }
  }
})


