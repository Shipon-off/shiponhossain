const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Fix footer
    content = content.replace(/<footer>[\s\S]*?<\/footer>/, `<footer>
    <div class="footer-links">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="projects.html">Projects</a>
      <a href="contact.html">Contact</a>
    </div>
    <div style="display: flex; gap: 1rem; align-items: center;">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style="font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">LinkedIn</a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" style="font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">GitHub</a>
    </div>
    <p style="font-size: 0.875rem;">&copy; 2026 Md. Shipon Hossain. All rights reserved.</p>
  </footer>`);

    // 2. Fix broken hrefs in generic a tags
    content = content.replace(/href="#"/g, 'href="javascript:void(0);"');

    // 3. Fix main tag aria-labels
    content = content.replace(/<main class="container">/g, '<main class="container" aria-label="Main Content">');

    // 4. Update title/name in navbar if any issues
    content = content.replace(/<a href="index.html" class="nav-brand">Shipon\.<\/a>/, 
        '<a href="index.html" class="nav-brand" aria-label="Homepage">Shipon.</a>');

    fs.writeFileSync(file, content, 'utf8');
});

console.log("HTML files updated successfully.");
