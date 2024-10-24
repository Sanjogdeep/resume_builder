// Save Personal Information
function savePersonalInfo() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const photo = document.getElementById('photo').files[0];

    // Convert image file to base64
    const reader = new FileReader();
    reader.onloadend = function () {
        localStorage.setItem('photo', reader.result);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        window.location.href = 'education.html';
    };
    reader.readAsDataURL(photo); // Read the photo file
}

// Save Education
function saveEducation() {
    const education = document.getElementById('education').value;
    localStorage.setItem('education', education);
    window.location.href = 'experience.html';
}

// Save Experience
function saveExperience() {
    const experience = document.getElementById('experience').value;
    localStorage.setItem('experience', experience);
    window.location.href = 'skills.html';
}

// Save Skills
function saveSkills() {
    const skills = document.getElementById('skills').value;
    localStorage.setItem('skills', skills.split('\n')); // Store as array
    window.location.href = 'preview.html';
}

// Generate Resume Preview
document.addEventListener("DOMContentLoaded", function () {
    const resumePreview = `
        <img src="${localStorage.getItem('photo')}" alt="Profile Photo" style="width: 150px; border-radius: 50%; margin-bottom: 10px;">
        <h2>${localStorage.getItem('name')}</h2>
        <p><strong>Email:</strong> ${localStorage.getItem('email')}</p>
        <p><strong>Phone:</strong> ${localStorage.getItem('phone')}</p>
        <hr>
        <h3>Education</h3>
        <p>${localStorage.getItem('education')}</p>
        <h3>Experience</h3>
        <p>${localStorage.getItem('experience')}</p>
        <h3>Skills</h3>
        <ul>
            ${localStorage.getItem('skills').split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    document.getElementById('resume-preview').innerHTML = resumePreview;

    // Download Resume
    document.getElementById('download-btn').addEventListener('click', function () {
        const resumeContent = document.getElementById('resume-preview').innerHTML;
        const blob = new Blob([resumeContent], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resume.html'; // You can change the file name as needed
        link.click();
    });
});
