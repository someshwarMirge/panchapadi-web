import React from 'react';
import Layout from '../components/Layout';

const Prarthana = () => {
    return (
        <Layout>
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6 transition-colors">
                <h1 className="text-3xl font-bold text-orange-800 dark:text-orange-400 mb-2 text-center font-marathi">पंचपदी</h1>
                <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-6 text-center font-marathi">प्रार्थना</h2>

                <div className="space-y-6 text-center text-lg text-gray-800 dark:text-gray-200 font-marathi leading-relaxed">
                    <p>
                        तुज न जाणता झालो कष्टी मल्हारी ।<br />
                        आता तुझे पायी दृढ घातली मिठी ॥<br />
                        कृपाळूवा जगजेठी मल्हारी ।<br />
                        अपराध पोटी घाली माझे ॥
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Prarthana;
