const { createApp } = Vue;
createApp({
    data() {
        return {
            title: 'Ciao',
            todos: [],
            addTask: '',
        }
    },
    methods: {
        fetchToBoList() {
            axios
                .get('./server.php')
                .then((res) => {
                    console.log(res.data.results)
                    this.todos = res.data.results
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
        },
    },
    mounted() {
        this.fetchToBoList()
    },

}).mount('#app')