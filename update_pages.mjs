import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'pages');

const marathiNumbers = {
    '1': '१', '2': '२', '3': '३', '4': '४', '5': '५',
    '6': '६', '7': '७', '8': '८', '9': '९', '10': '१०'
};

fs.readdirSync(pagesDir).forEach(file => {
    if (file.startsWith('Aarti') && file.endsWith('.jsx')) {
        const filePath = path.join(pagesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        const number = file.match(/\d+/)[0];
        const marathiNumber = marathiNumbers[number] || number;

        // Replace "Aarti X" with "पद X" in the visible text (h1 and p tags)
        // We use a regex that avoids changing the component name or file imports
        content = content.replace(new RegExp(`>Aarti ${number}<`, 'g'), `>पद ${marathiNumber}<`);
        content = content.replace(new RegExp(`for Aarti ${number}`, 'g'), `for पद ${marathiNumber}`);

        // Add font-marathi class to h1 and p if not present
        content = content.replace('text-3xl font-bold text-gray-900 mb-4', 'text-3xl font-bold text-gray-900 mb-4 font-marathi');
        content = content.replace('text-gray-600', 'text-gray-600 font-marathi');

        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
    }
});
