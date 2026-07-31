import React from 'react';

const Settings = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Account Settings</h2>
      <div className="space-y-3 max-w-sm">
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" className="rounded text-blue-600" defaultChecked />
          Receive email updates
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" className="rounded text-blue-600" defaultChecked />
          Enable 2-Factor Authentication
        </label>
      </div>
    </div>
  );
};

export default Settings;