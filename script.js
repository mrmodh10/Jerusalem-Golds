document.addEventListener('DOMContentLoaded', function() {
    // Check if the URL path contains 'email-verified'
    if (window.location.pathname.endsWith('/email-verified')) {
        document.getElementById('email-verified-screen').style.display = 'block';
    }
});
