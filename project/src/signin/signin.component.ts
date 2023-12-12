// script.ts
function submitForm() {
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username && password) {
        // Perform your authentication logic here
        console.log("Username:", username);
        console.log("Password:", password);

        // For a real application, you might want to make an API request to handle authentication
        // Example: You can use the fetch API or a library like Axios to make HTTP requests.
    } else {
        alert("Please fill in both username and password.");
    }
}
