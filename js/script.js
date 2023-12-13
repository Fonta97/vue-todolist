const { createApp } = Vue

createApp({
    data() {
        return {
            activeItem: 0,
            message: "",
            error: false,
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {
        removeItem(index) {
            this.todos.splice(index, 1)
        },

        addTask() {
            if (this.message.length >= 5) {
                this.todos.unshift({ text: this.message, done: false });
                this.message = "";
                this.error = false;
            } else {
                this.error = true;
            }
        }
    }
}).mount("#app")
