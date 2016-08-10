var Vue = require('vue')

new Vue({
  el: 'body',
  data: {
    currentView: 'posts'
  },
  components: {
    home: {
      template: '<div>home</div>'
    },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})
