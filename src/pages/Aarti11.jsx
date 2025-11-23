import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Aarti11 = () => {
    return (
        <Layout>
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6 transition-colors text-center">
                <h1 className="text-3xl font-bold text-orange-800 dark:text-orange-400 mb-2 text-center font-marathi">पद ११</h1>
                <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-6 text-center font-marathi">(११)</h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 font-marathi">
                    अन्यायी खरा परी दास तुझा <br />
                    आपराध क्षमा करी कोण दुजा <br />
                    धरी हाती मला, करी तु आपुला <br />
                    प्रभुजी प्रभुजी प्रभु तारी मला - ॥धृ॥<br />
                    <br />
                    अरी मित्र समान तुला श्रीहरी <br />
                    मजला ही प्रचिती, आली से खरी <br />
                    पुतणे प्रति मोक्ष, तु हा दिधली <br />
                    प्रभुजी प्रभुजी - ॥१॥<br />
                    <br />
                    कनवाळु तुझ्याविन कोणी नसे <br />
                    बदली आसरा आणी साहीलसे <br />
                    म्हणुनी दिन वत्सल नाम तुला <br />
                    प्रभुजी प्रभुजी प्रभु तारी मला - ॥२॥<br />
                </p>
               
            </div>
        </Layout>
    );
};

export default Aarti11;
