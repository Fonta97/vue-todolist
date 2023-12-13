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
    }
})
