document.addEventListener('DOMContentLoaded', () => {
    const chat = document.getElementById('chat');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');

    // Replace with the WebSocket URL provided by app.gosandy
    const ws = new WebSocket('somewebsocketidonthave');

    ws.addEventListener('open', () => {
        console.log('Connected to WebSocket server');
    });

    ws.addEventListener('message', (event) => {
        const message = document.createElement('div');
        message.textContent = event.data;
        chat.appendChild(message);
        chat.scrollTop = chat.scrollHeight;
    });

    ws.addEventListener('error', (error) => {
        console.error('WebSocket error:', error);
    });

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const message = messageInput.value;
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(message);
        } else {
            console.error('WebSocket is not open');
        }
        messageInput.value = '';
    });
});
