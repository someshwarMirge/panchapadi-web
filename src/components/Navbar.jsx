import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        sessionStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

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
    ];

    return (
        <nav className="bg-orange-600 dark:bg-gray-800 text-white shadow-lg font-marathi transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold hover:text-orange-100 transition-colors">पंचपदी</Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4 flex-wrap">
                            {menuItems.slice(0, 6).map((item) => (
                                <Link key={item.name} to={item.path} className="hover:bg-orange-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">{item.name}</Link>
                            ))}
                            <div className="relative group inline-block">
                                <button className="hover:bg-orange-700 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                                    अधिक
                                </button>
                                <div className="absolute left-0 top-full w-48 pt-2 hidden group-hover:block z-10">
                                    <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {menuItems.slice(6).map((item) => (
                                                <Link key={item.name} to={item.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100">{item.name}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ThemeToggle />
                            <button onClick={handleLogout} className="bg-orange-800 hover:bg-orange-900 px-3 py-2 rounded-md text-sm font-medium transition-colors ml-4">
                                बाहेर पडा
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden items-center gap-2">
                        <ThemeToggle />
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-orange-700 focus:outline-none transition-colors">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-orange-600">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item) => (
                            <Link key={item.name} to={item.path} onClick={toggleMenu} className="block hover:bg-orange-700 px-3 py-2 rounded-md text-base font-medium transition-colors">
                                {item.name}
                            </Link>
                        ))}
                        <button onClick={() => { toggleMenu(); handleLogout(); }} className="block w-full text-left hover:bg-orange-700 px-3 py-2 rounded-md text-base font-medium transition-colors text-orange-100">
                            बाहेर पडा
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
