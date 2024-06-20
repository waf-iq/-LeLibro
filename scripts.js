// Login form submission handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Define valid usernames and passwords for different roles
    const users = {
        'admin': '123',
        'librarian': '123',
        'student': '123'
    };

    // Check if the entered username and password match any valid user
    if (username in users && users[username] === password) {
        // Redirect to appropriate welcome page based on the user's role
        if (username === 'admin') {
            window.location.href = 'admin_dashboard.html';
        } else if (username === 'librarian') {
            window.location.href = 'librarian_welcome.html';
        } else {
            window.location.href = 'student_welcome.html';
        }
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

// Find a Book form submission handling
document.getElementById('findBookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const searchTerm = document.getElementById('searchTerm').value;
    const searchResults = document.getElementById('searchResults');

    // Clear previous results
    searchResults.innerHTML = '';

    // Example of how to display results (in a real application, you would fetch this data from an API or a database)
    const results = [
        { title: 'Book 1', description: 'Description of Book 1' },
        { title: 'Book 2', description: 'Description of Book 2' },
        { title: 'Book 3', description: 'Description of Book 3' }
    ];

    // Filter results based on search term (for demonstration purposes)
    const filteredResults = results.filter(result => result.title.toLowerCase().includes(searchTerm.toLowerCase()));

    filteredResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<h3>${result.title}</h3><p>${result.description}</p>`;
        searchResults.appendChild(resultItem);
    });
});

// Borrow a Book form submission handling
document.getElementById('saveBookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;

    // For demonstration purposes, log the input values
    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Genre:', genre);

    // In a real application, you would send this data to your server to save the new book
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, error => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
  