import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Aarti12 = () => {
    return (
        <Layout>
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6 transition-colors text-center">
                <h1 className="text-3xl font-bold text-orange-800 dark:text-orange-400 mb-2 text-center font-marathi">पद १२</h1>
                <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-6 text-center font-marathi">(१२) - (राग - मालकंस)</h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 font-marathi">
                    मल्हारी राया, तुच आम्हा आधार <br />
                    कृपा दृष्टी तु ठेव करोनी, दुष्टांचा संहार ॥धृ॥<br />
                    <br />
                    तुच करता, तुच विचारी <br />
                    तुझीच देवा, लीला सारी <br />
                    कधी पाहसी अंत अचानक, कधी तु होशी उदार ॥१॥<br />
                    <br />
                    दास तुझा मज म्हणती सारे <br />
                    तुझ्या समोरी आज उभा रे <br />
                    ध्यानी-मनी मम सदैव आता, जय यळकोट मल्हार ॥२॥<br />
                    <br />
                    संकट कसले, कसली चिंता <br />
                    धन्य होई तव चरण वंदीता <br />
                    भीती संपते सगळी भावीता, लल्लाटी भंडार ॥३॥<br />
                    <br />
                    एक मागणे, कोवे पुरे <br />
                    भक्त तुझा, मागतो तुला रे <br />
                    अखंड राहावा नयनि तुझा रे, महिमा अपरंपार ॥४॥<br />
                    मल्हारी राया, तुच आम्हा आधार<br />
                </p>
                
            </div>
        </Layout>
    );
};

export default Aarti12;
