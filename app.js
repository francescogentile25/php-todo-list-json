const { createApp } = Vue;
createApp({
    data() {
        return {
            title: 'Ciaooo',
            todos: [],
            addTask: '',
        }
    },
    methods: {
        fetchToBoList() {
            axios
                .get('./server.php')
                .then((res) => {
                    // console.log(res.data)
                    this.todos = res.data.text
                })
        },
        newTask() {
            console.log('ciao', this.addTask)
            $dati = {
                todo: this.addTask,
            }


            axios.post('./server.php', $dati, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
                .then((res) => {
                    this.todos = res.data.text
                    this.addTask = ''
                })
        },
    },
    mounted() {
        this.fetchToBoList()
    },

}).mount('#app')