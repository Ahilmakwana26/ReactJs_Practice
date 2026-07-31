import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">Get in Touch</h1>
      <form className="space-y-4 bg-slate-50 p-8 rounded-2xl border border-slate-100">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Name</label>
          <input type="text" className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
          <input type="email" className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
          <textarea rows="4" className="w-full border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500" placeholder="How can we help?"></textarea>
        </div>
        <button type="button" className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;