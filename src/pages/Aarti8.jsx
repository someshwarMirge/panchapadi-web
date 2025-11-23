import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Aarti8 = () => {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6 transition-colors text-center">
        <h1 className="text-3xl font-bold text-orange-800 dark:text-orange-400 mb-2 text-center font-marathi">पद ८</h1>
        <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-6 text-center font-marathi">(८)</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 font-marathi">
          नमस्कार भावे करितो, म्हाळसापतीला <br />
          आशीर्वाद देई देवा, आस ही मनाला - ॥धृ॥<br />
          <br />
          नित्य तुझी सेवा करितो, भावना धरुनी <br />
          कधी भेट देशी मजला, भक्त मी म्हणोनी <br />
          व्याकुळता देहा जाळी, देई दर्शनाला - ॥१॥<br />
          <br />
          तुच कुलस्वामी माझा, तुच माय बाप <br />
          दूर करी संसाराचा भोग हा अमाप <br />
          तुच एक त्राता अंती, मोक्ष लाभण्याला - ॥२॥<br />
          <br />
          शरणदास मालु प्रभुरे, लीनला धरुनी <br />
          धाव घेई खंडेराया, ध्यान सत्य मानी <br />
          नको वेड लावू आता, जीव हा भुकेला - ॥३॥<br />
          <br />
          आशीर्वाद देई देवा, आस ही मनाला <br />
          आस ही मनाला<br />
        </p>
        
      </div>
    </Layout>
  );
};

export default Aarti8;
