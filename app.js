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
                    console.log(res.data)
                })

        },
    },
    mounted() {
        this.fetchToBoList()
    },

}).mount('#app')