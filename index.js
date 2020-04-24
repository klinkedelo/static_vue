var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
      ToDo: 'Enter new ToDo'
    },
    methods: {
        addToDo: function () {
            if (this.ToDo != 'Enter new ToDo'){
                app4.todos.push({ text: this.ToDo })
                this.ToDo = 'Enter new ToDo'
            }
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data () {
        return {
        posts_vue: null,
        name: null,
        post: null
        }
    },
    mounted () {
        this.getEntries()
    },
    methods: {
        postEntry: function () {
            axios
            .post('http://127.0.0.1:5000/api2', {
                name: this.name,
                post: this.post
            })
            .then((response) => {
                console.log(response);
                this.getEntries()
            })           
        },
        getEntries: function () {
            axios
            .get('http://127.0.0.1:5000/api')
            .then(response => (this.posts_vue = response.data))
            .catch(error => console.log(error))
        },        
    }
})
