document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Replace the following with your actual login logic
    if (username === 'Kecoy' && password === '3162023') {
      window.location.href = 'home.html'; // Redirect to dashboard page
    } else {
      document.getElementById('error-msg').innerText = 'Invalid username or password';
    }
  });
