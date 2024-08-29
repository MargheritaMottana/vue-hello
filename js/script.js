
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            imgsrc: 'https://tse3.mm.bing.net/th?id=OIP.nNGCxcz7kwJehe-YvBjJzwHaGa&pid=Api',
        }
    }
}).mount('#app')