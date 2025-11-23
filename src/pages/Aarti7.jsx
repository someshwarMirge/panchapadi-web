import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Aarti7 = () => {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6 transition-colors text-center">
        <h1 className="text-3xl font-bold text-orange-800 dark:text-orange-400 mb-2 text-center font-marathi">पद ७</h1>
        <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-6 text-center font-marathi">(७)</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 font-marathi">
          नमन करी दास तुझे पाया <br />
          तुजविण मजला नाही त्राता <br />
          या संकट समया - ॥धृ॥<br />
          <br />
          मित्र होते ते शत्रु बनले <br />
          प्राप्ती चे ही मार्ग खुंटले <br />
          प्रयत्न सारे व्यर्थची गेले, येवु दे माया - ॥१॥<br />
          <br />
          काम कराया मार्ग सुचेना <br />
          चिंतेच्या मनी होती यातना <br />
          कुठवर पहासी आमुची दैना, मल्हारी राया - ॥२॥<br />
          <br />
          पांडव पालक म्हणती हारीला <br />
          मिरगे रक्षक बोलती तुजला <br />
          सांभाळीया तव ब्रिदाला, तु खंडेराया - ॥३॥<br />
          <br />
          जरी तु मिरग्यांचा कैवारी <br />
          येवुनी संकट इतुके वारी <br />
          मारुती आत्मज चरण तव धरी, दहिफळच्या राया <br />
          नमन करी दास तुझे पाया - ॥४॥<br />
        </p>
        
      </div>
    </Layout>
  );
};

export default Aarti7;
