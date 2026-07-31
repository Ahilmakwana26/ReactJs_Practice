import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-black text-slate-300 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
      <p className="text-slate-500 text-sm mb-6">The page you are looking for doesn't exist or has been moved.</p>
      <Link to={'/'} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;