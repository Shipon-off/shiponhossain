const fs = require('fs');
const path = require('path');

const filesToProcess = ['skills.html', 'projects.html', 'gallery.html'];
let combinedStyles = '\n/* Extracted Component Styles */\n';

filesToProcess.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract styles
    const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
    if (styleMatch) {
        combinedStyles += `\n/* From ${filename} */\n${styleMatch[1]}`;
        // Remove style tag
        content = content.replace(/<style>[\s\S]*?<\/style>/, '');
        fs.writeFileSync(filePath, content, 'utf8');
    }
});

fs.appendFileSync(path.join(__dirname, 'css/style.css'), combinedStyles, 'utf8');
console.log('Styles extracted successfully');
