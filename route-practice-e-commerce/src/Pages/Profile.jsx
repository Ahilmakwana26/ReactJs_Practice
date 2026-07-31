import React, { use } from 'react';
import { useLocation } from 'react-router-dom';
const Profile = () => {
  const location = useLocation();
  let data = location?.state?.user;
  console.log(data);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800">User Profile</h2>
      <div className="text-sm space-y-2 text-slate-600">
        <p><strong>Name:</strong> {data?.name}</p>
        <p><strong>Email:</strong> {data?.email}</p>
        <p><strong>Role:</strong>{data?.role}</p>
      </div>
    </div>
  );
};

export default Profile;