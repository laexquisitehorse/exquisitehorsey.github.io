// Simple counter (this could be more complex, e.g., counting unique users)
let count = 1;

window.addEventListener('load', () => {
    // Increment count on page load
    fetch('/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count }),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
