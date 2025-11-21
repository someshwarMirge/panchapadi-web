import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'pages');

// Update Aarti pages 1-14 with dark mode styles
for (let i = 1; i <= 14; i++) {
    const filename = `Aarti${i}.jsx`;
    const filepath = path.join(pagesDir, filename);

    const marathiNumber = ['१', '२', '३', '४', '५', '६', '७', '८', '९', '१०', '११', '१२', '१३', '१४'][i - 1];

    const content = `import React from 'react';
import Layout from '../components/Layout';

const Aarti${i} = () => {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6 transition-colors">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-marathi">पद ${marathiNumber}</h1>
        <p className="text-gray-600 dark:text-gray-300 font-marathi">
          This is a placeholder for पद ${marathiNumber}. The content will be added later in Marathi.
        </p>
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-marathi">
            Content coming soon...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Aarti${i};
`;

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated ${filename}`);
}

console.log('All Aarti pages updated with dark mode styles!');
