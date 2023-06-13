// script.js
$(document).ready(function() {
    // Form submission for personal information
    $("#personalForm").submit(function(event) {
        event.preventDefault();

        var fullName = $("#fullName").val();
        var email = $("#email").val();
        var phone = $("#phone").val();

        var personalInfo = `
      <h4>Personal Information</h4>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <hr>
    `;

        $("#resumeContent").append(personalInfo).hide().fadeIn();
        $("#resume").show();

        // Clear form inputs
        $("#fullName").val("");
        $("#email").val("");
        $("#phone").val("");
    });

    // Form submission for education
    $("#educationForm").submit(function(event) {
        event.preventDefault();

        var degree = $("#degree").val();
        var university = $("#university").val();
        var graduationYear = $("#graduationYear").val();

        var educationInfo = `
      <h4>Education</h4>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>University:</strong> ${university}</p>
      <p><strong>Graduation Year:</strong> ${graduationYear}</p>
      <hr>
    `;

        $("#resumeContent").append(educationInfo).hide().fadeIn();

        // Clear form inputs
        $("#degree").val("");
        $("#university").val("");
        $("#graduationYear").val("");
    });

    // Form submission for experience
    $("#experienceForm").submit(function(event) {
        event.preventDefault();

        var jobTitle = $("#jobTitle").val();
        var company = $("#company").val();
        var jobDescription = $("#jobDescription").val();

        var experienceInfo = `
      <h4>Experience</h4>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Job Description:</strong> ${jobDescription}</p>
      <hr>
    `;

        $("#resumeContent").append(experienceInfo).hide().fadeIn();

        // Clear form inputs
        $("#jobTitle").val("");
        $("#company").val("");
        $("#jobDescription").val("");
    });

    // Form submission for skills
    $("#skillsForm").submit(function(event) {
        event.preventDefault();

        var skillName = $("#skillName").val();
        var skillLevel = $("#skillLevel").val();

        var skillsInfo = `
      <h4>Skills</h4>
      <p><strong>Skill:</strong> ${skillName}</p>
      <p><strong>Skill Level:</strong> ${skillLevel}</p>
      <hr>
    `;

        $("#resumeContent").append(skillsInfo).hide().fadeIn();

        // Clear form inputs
        $("#skillName").val("");
        $("#skillLevel").val("");
    });

    // Form submission for projects
    $("#projectsForm").submit(function(event) {
        event.preventDefault();

        var projectTitle = $("#projectTitle").val();
        var projectDescription = $("#projectDescription").val();

        var projectsInfo = `
      <h4>Projects</h4>
      <p><strong>Project Title:</strong> ${projectTitle}</p>
      <p><strong>Project Description:</strong> ${projectDescription}</p>
      <hr>
    `;

        $("#resumeContent").append(projectsInfo).hide().fadeIn();

        // Clear form inputs
        $("#projectTitle").val("");
        $("#projectDescription").val("");
    });

    // View Resume button click event
    $("#viewResumeBtn").click(function() {
        $("#resumeContent").toggle();
    });
});