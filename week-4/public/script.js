// Grab the button and the output paragraph from the page
const button = document.getElementById('load-btn');
const output = document.getElementById('output');

// When the button is clicked, ask the server for a message
button.addEventListener('click', async () => {
  output.textContent = 'Loading...';

  try {
    // fetch() calls our Express route defined in server.js
    const response = await fetch('/api/hello');

    // If the server responded with an error status, handle it
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    // Turn the JSON reply into a JavaScript object and show it
    const data = await response.json();
    output.textContent = `${data.message} (server time: ${data.time})`;
  } catch (err) {
    output.textContent = 'Something went wrong: ' + err.message;
  }
});