console.log("Script started")
const app = new Vue({
  el: '#app',
  data: {
    heading: 'Vue.js Todo Application',
    id : 1,
    Todotext: '',
    done : false,
    todos: []
  },
  methods: {
    reset(){
      this.id++;
      this.Todotext = '',
      this.done = false
    },
    addTodo: function() {
      let todo = {
        id : this.id,
        Todotext : this.Todotext,
        done : this.done
      }
      console.log(todo)
      this.todos.push(todo)
      this.reset()
        },
      deleteTodo: function(todo) {
        const idx = this.todos.indexOf(todo)
        this.todos.splice(idx,1)
    }
    }
});
