const app = Vue.createApp({
    data() {
        return {
            firstName: 'Rahul',
            lastName: 'More'
        }
    },
    methods: {
        getUser() {
            console.log('Ok, getting user', this.firstName)
        }
    }
});

app.mount('#app');