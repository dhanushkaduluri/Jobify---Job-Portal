function logout() {
    const result = confirm("Are you sure you want to logout?");
    if (result) {
        // Redirect to the server logout route
        window.location.href = '/recruiter-logout';
    }
}