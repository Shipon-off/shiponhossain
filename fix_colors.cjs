const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Replace color: #fff with color: var(--text-primary)
    content = content.replace(/color:\s*#fff/g, 'color: var(--text-primary)');
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log("HTML files updated for light/dark mode #fff replacement.");
