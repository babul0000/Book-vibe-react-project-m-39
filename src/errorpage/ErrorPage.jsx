import React from 'react';
// TriangleAlert কাজ না করলে AlertTriangle ব্যবহার করে দেখুন
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 font-sans">
      <div className="max-w-md w-full text-center">
        
        {/* আইকন বক্স */}
        <div className="relative flex justify-center mb-8">
          <div className="absolute inset-0 bg-indigo-200 blur-3xl opacity-30 rounded-full"></div>
          <div className="relative bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50">
            {/* এখানে TriangleAlert এর বদলে AlertTriangle দিয়েছি সামঞ্জস্যের জন্য */}
            <AlertTriangle size={64} className="text-indigo-600 animate-pulse" />
          </div>
        </div>

        <h1 className="text-9xl font-black text-slate-900 mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h2>
        <p className="text-slate-600 mb-10 leading-relaxed">
          দুঃখিত, আপনি যে পাতাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা এর নাম পরিবর্তন করা হয়েছে।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-all duration-200 active:scale-95"
          >
            <ArrowLeft size={18} />
            ফিরে যান
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all duration-200 active:scale-95"
          >
            <Home size={18} />
            হোমে ফিরুন
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            সাহায্য প্রয়োজন? <a href="/support" className="text-indigo-600 font-semibold hover:underline">সাপোর্ট টিমের সাথে কথা বলুন</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;