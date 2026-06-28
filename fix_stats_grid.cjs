const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'index.html');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<div style="display: grid; grid-template-columns: repeat\(3, 1fr\); gap: 1\.5rem; margin-top: 2rem;">/,
  '<div class="hero-stats-grid">'
);

fs.writeFileSync(file, content, 'utf8');
console.log("Added hero-stats-grid class to index.html");
