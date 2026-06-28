const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Add aria-labels to hamburger
    content = content.replace(/<div class="hamburger">/, '<button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" style="background: none; border: none;">');
    content = content.replace(/<\/div>\s*<ul class="nav-links">/, '</button>\n    <ul class="nav-links">');
    
    // Add role="img" to profile placeholders
    content = content.replace(/background-image: url\('\/images\/profile.jpg'\);/g, `background-image: url('/images/profile.jpg');" role="img" aria-label="Profile Photo of Md. Shipon Hossain`);
    
    // Add role="img" to projects
    content = content.replace(/class="project-img"(.*?)>/g, 'class="project-img"$1 role="img" aria-label="Project thumbnail">');
    
    // Convert <h3> inside timeline / cards into <h2> if it's the main heading inside a section, or leave it.
    // Actually, SEO structure prefers h1 -> h2 -> h3.
    // The previous h1 inside hero was overriden, now it's `.hero h1`, which is correct.

    fs.writeFileSync(file, content, 'utf8');
});

console.log("HTML Accessibility files updated successfully.");
