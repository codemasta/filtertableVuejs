var app = new Vue({
  el: "#todo",
  data: {
    todos: [],
    search:'',
    computedTodos:[]
  },
  mounted() {
    loadAll: {
      axios
        .get("https://jsonplaceholder.typicode.com/users") 
        .then(response => {
          this.todos = response.data;
        })
        .catch(function(error) {});
    }
  },
  computed: {
    computedData: function() { 
      this.computedTodos = this.todos;  
      console.log(this.computedTodos);  
      if (this.search) {
        this.computedTodos = this.computedTodos.filter(item => item.name.toUpperCase().includes(this.search.toUpperCase()) || item.username.toUpperCase().includes(this.search.toUpperCase()) || item.email.toUpperCase().includes(this.search.toUpperCase()));   
        return this.computedTodos;
      }
      return this.computedTodos;
    }
  }  
});
