const { createApp } = Vue;
createApp({
    data() {
        return {
            title: 'Ciao',
            todos: [],
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
    },
    mounted() {
        this.fetchToBoList()
    },

}).mount('#app')