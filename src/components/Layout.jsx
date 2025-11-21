import React from 'react';
import Navbar from './Navbar';
import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Layout = ({ children }) => {
    const location = useLocation();

    const menuItems = [
        { name: 'मुख्यपृष्ठ', path: '/' },
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

    const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
    const prevItem = currentIndex > 0 ? menuItems[currentIndex - 1] : null;
    const nextItem = currentIndex < menuItems.length - 1 ? menuItems[currentIndex + 1] : null;

    return (
        <div className="min-h-screen bg-orange-50 dark:bg-gray-900 font-marathi transition-colors">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}

                {/* Bottom Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-orange-200 dark:border-gray-700">
                    {prevItem ? (
                        <Link to={prevItem.path} className="flex items-center text-orange-700 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300">
                            <ChevronLeft className="mr-1" /> {prevItem.name}
                        </Link>
                    ) : <div></div>}

                    {nextItem ? (
                        <Link to={nextItem.path} className="flex items-center text-orange-700 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300">
                            {nextItem.name} <ChevronRight className="ml-1" />
                        </Link>
                    ) : <div></div>}
                </div>
            </main>
        </div>
    );
};

export default Layout;
