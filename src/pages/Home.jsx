import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'प्रार्थना', path: '/prarthana' },
  { name: 'पद १', path: '/aarti1' },
  { name: 'पद २', path: '/aarti2' },
  { name: 'पद ३', path: '/aarti3' },
  { name: 'पद ४', path: '/aarti4' },
  { name: 'पद ५', path: '/aarti5' },
  { name: 'पद ६', path: '/aarti6' },
  { name: 'पद ७', path: '/aarti7' },
  { name: 'पद ८', path: '/aarti8' },
  { name: 'पद ९', path: '/aarti9' },
  { name: 'पद १०', path: '/aarti10' },
  { name: 'पद ११', path: '/aarti11' },
  { name: 'पद १२', path: '/aarti12' },
  { name: 'पद १३', path: '/aarti13' },
  { name: 'पद १४', path: '/aarti14' },
];

const Home = () => {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6 font-marathi transition-colors">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">पंचपदी</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">पद निवडा:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="bg-gradient-to-r from-orange-200 to-orange-100 dark:from-orange-800 dark:to-orange-700 rounded-xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in"
            >
              <h2 className="text-xl font-semibold text-orange-800 dark:text-orange-100">{page.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
