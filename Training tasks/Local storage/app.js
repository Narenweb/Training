document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');
    const form = document.getElementById('myForm');
  
    // Form submission event listener
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const firstName = document.getElementById('firstName').value;
      const email = document.getElementById('email').value;
  
      // Create an object to store the data
      const userData = {
        firstName: firstName,
        email: email,
      };
  
      // Convert the data object to a JSON string
      const jsonData = JSON.stringify(userData);
  
      // Store the JSON string in the local storage
      localStorage.setItem('userData', jsonData);
  
      // Display the user data on the page
      showUserData(userData);
  
      // Reset the form
      form.reset();
    });
  
    // Function to display user data on the page
    function showUserData(userData) {
      const userDataContainer = document.getElementById('userData');
  
      // Display the user data on the page
      const userDataHTML = `
        <h2>User Data:</h2>
        <p><strong>First Name:</strong> ${userData.firstName}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
      `;
      userDataContainer.innerHTML = userDataHTML;
    }
  
    // Retrieve the data from local storage
    const jsonData = localStorage.getItem('userData');
  
    if (jsonData) {
      // If data exists in local storage, parse the JSON string back to an object
      const userData = JSON.parse(jsonData);
  
      // Display the user data on the page
      showUserData(userData);
    }
  });
  