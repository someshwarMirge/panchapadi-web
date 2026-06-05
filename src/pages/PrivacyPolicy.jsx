import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, Heart, Lock, EyeOff, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-orange-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-orange-100 dark:border-gray-700">
                
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-8 text-white relative">
                    <button 
                        onClick={() => navigate(-1)}
                        className="absolute top-6 left-6 flex items-center gap-2 text-sm bg-black bg-opacity-20 hover:bg-opacity-30 px-3 py-1.5 rounded-lg transition"
                    >
                        <ArrowLeft size={16} /> back
                    </button>
                    <div className="text-center mt-6">
                        <Shield className="mx-auto mb-3 text-orange-100" size={48} />
                        <h1 className="text-3xl font-bold font-sans">Privacy Policy</h1>
                        <p className="text-orange-100 text-sm mt-2">Last Updated: June 2026</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                    
                    {/* Safe for Kids Badge */}
                    <div className="flex items-center gap-4 bg-emerald-50 dark:bg-emerald-950 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900">
                        <div className="bg-emerald-500 text-white p-2.5 rounded-full">
                            <Heart size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-emerald-800 dark:text-emerald-300">100% Safe for Children (Ages 5+)</h3>
                            <p className="text-sm text-emerald-700 dark:text-emerald-400">
                                This app is built with children's safety and privacy as our top priority. We do not display ads, collect data, or track users.
                            </p>
                        </div>
                    </div>

                    {/* Section 1: Introduction */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-orange-800 dark:text-orange-400 flex items-center gap-2">
                            <CheckCircle size={20} /> Introduction
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Welcome to <strong>पंचपदी (Panchapadi)</strong>. We respect your privacy and are committed to protecting it. 
                            This privacy policy describes how our mobile application and web application handle information.
                        </p>
                    </section>

                    {/* Section 2: No Data Collection */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-orange-800 dark:text-orange-400 flex items-center gap-2">
                            <EyeOff size={20} /> Data Collection & Privacy
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            <strong>We do not collect any personal data.</strong> The app is fully self-contained:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                            <li>We do not collect names, email addresses, phone numbers, or physical addresses.</li>
                            <li>We do not collect device identifiers, IP addresses, or precise location data.</li>
                            <li>We do not use tracking cookies, analytics tools, or third-party SDKs that monitor behavior.</li>
                            <li>Any password verification or theme preference is saved locally on your device (e.g. browser storage) and is never transmitted to us or any third party.</li>
                        </ul>
                    </section>

                    {/* Section 3: Children's Privacy (COPPA Compliance) */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-orange-800 dark:text-orange-400 flex items-center gap-2">
                            <Lock size={20} /> Children's Privacy
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our application is designed for a general audience, including children above the age of 5. Because we do not collect, request, or store any personal information from any user, our services comply with the <strong>Children's Online Privacy Protection Act (COPPA)</strong> and general global child-safety practices.
                        </p>
                    </section>

                    {/* Section 4: Security */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-orange-800 dark:text-orange-400 flex items-center gap-2">
                            <Shield size={20} /> App Security
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Since no user data is uploaded or processed on external servers, your usage of the app is completely secure and resides entirely within your local environment.
                        </p>
                    </section>

                    {/* Section 5: Contact Us */}
                    <section className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Questions?</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            If you have any questions or feedback regarding this privacy policy, please contact us.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
