const valusername = "Tushar9802";
const valpass = "1234";
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('loginContainer');
    const dashboardContainer = document.getElementById('dashboardContainer');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const fetchButton = document.getElementById('fetchButton');
    const userListContainer = document.getElementById('userList');
    const logoutButton = document.getElementById('logoutButton');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if(username===valusername && password===valpass){
            loginContainer.style.display = 'none';
            dashboardContainer.style.display = 'block';
            usernameDisplay.textContent = username;
        }
        else{
            alert('Invalid Login Details');
        }
    });
    fetchButton.addEventListener('click', function() {
        const users = ['mojombo', 'defunkt', 'pjhyett', 'wycats', 'ezmobius', 'ivey', 'evanphx', 'vanpelt', 'wayneeseguin', 'brynary'];
        userListContainer.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user;
            userListContainer.appendChild(li);
        });
    });

    // Handle logout
    logoutButton.addEventListener('click', function() {
        dashboardContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        loginForm.reset(); // Clear the login form fields
    });
});