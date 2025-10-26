document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('jobSearchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            const keywords = document.getElementById('keywords').value;
            const location = document.getElementById('location').value;

            console.log('--- Homepage Search Query ---');
            console.log(`Keywords: ${keywords}`);
            console.log(`Location: ${location}`);
        });
    }

    // 2. Employer Login Form Handler
    const loginForm = document.getElementById('employerLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload
            
            const email = document.getElementById('emp-email').value;
            const password = document.getElementById('emp-password').value;
            
            alert(`Login attempt for Employer: ${email}. (Success/Fail check would happen on the backend)`);
            
            // In a full project, you'd send this data via fetch/XMLHttpRequest here.
        });
    }
});
