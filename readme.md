CareerCompass – Job Portal (Frontend Phase)
Project Title
    CareerCompass – Careers Site and Job Portal

Project Concept
    CareerCompass is a web-based platform for companies to post job vacancies and for applicants to browse and apply for jobs. The portal provides separate experiences for employers and applicants, including registration, login, job posting, and application submission.

Features Implemented (Frontend Version)
    Structured HTML Layout

    Employer and applicant registration/login pages.

    Separate, clear dashboard screens for both roles.

    Basic navigation across all pages.

    Consistent CSS Styling

    Unified color theme and visual consistency (base.css plus section styling).

    Responsive design for desktop and mobile.

    JavaScript Interactivity

    Real-time form validation, inline error/success messages.

    Use of localStorage for demo credential management.

    Duplicate registration checks and feedback.

    Basic Navigation and UI Elements

    Header/footer navigation and clear switching between employer/applicant flows.

    Buttons and links for all key actions.

    Job Notices

    Employer can add a new job notice after logging in.

    Job details update automatically in jobs.html for all to view.

How to Use This Site
    For Employers:

    Go to the Employer Register page and fill out the registration form.

    Upon successful registration, credentials are saved in localStorage.

    Log in via the Employer Login page.

    After logging in, you can upload a job notice (using the provided form).

    The posted job appears live in jobs.html.

    For Applicants:

    View available jobs in jobs.html.

    Click the Apply button on any job notice to access the application form.

    Fill out the applicant details and submit.

    Application is stored (in demo, via localStorage).

Structure/Sample Folders
text
CareerCompass/
│
├── index.html
├── jobs.css
├── base.css
├── index.css
├── employer.css
├── jobs.css
├── validation.js
├── services.html
├── script.js
│
├── employer/
│   ├── employer-register.html
│   ├── employer-register.js
│   ├── employer-login.html
│   ├── employer-login.js
│   ├── employervalidation.js
│   └── jobnotice.html
│   └── jobnotice.css
│
├── applicant/
│   ├── applicant-register.html
│   ├── applicant-register.js
│   ├── applicant-login.html
│   ├── applicant-login.js
│   └── applicant-apply.html
│   ├── applicantvalidation.js
│
└── README.md
Planned Future Improvements
Connecting data to a real backend (Node.js + MySQL or similar).

Enabling employers to edit/delete job posts.

Adding job filtering and search for applicants.

Integrating authentication, secure sessions, and role-based dashboards.

Allowing resume upload and notifications.

Tracking applications for employers and applicants.

Improved UI/UX elements and more mobile-optimized layout.

How To Run
Open any .html page in your browser.

All demo features (registration, login, job posting, application) run locally using the browser only.

No server required for this phase.

Submission Checklist
 HTML, CSS, JS files organized

 Consistent, responsive, interactive portal interface

 README file with usage instructions, features, structure, and future plans


 GITHUB REPOSITORY
 https://github.com/Varshithaappam/Career-Portal