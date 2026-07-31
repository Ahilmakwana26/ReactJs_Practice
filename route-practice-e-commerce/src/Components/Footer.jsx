import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">CRESCENDO</h3>
          <p className="text-sm leading-relaxed">Elevate your audio journey with premium high-fidelity gear engineered for clarity.</p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="transition-colors hover:text-white">Home</a></li>
            <li><a href="/products" className="transition-colors hover:text-white">Products</a></li>
            <li><a href="/about" className="transition-colors hover:text-white">About Us</a></li>
            <li><a href="/contact" className="transition-colors hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/login" className="transition-colors hover:text-white">Login</a></li>
            <li><a href="/dashboard" className="transition-colors hover:text-white">Dashboard</a></li>
            <li><a href="/profile" className="transition-colors hover:text-white">Profile</a></li>
            <li><a href="/settings" className="transition-colors hover:text-white">Settings</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Newsletter</h4>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">Join</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;