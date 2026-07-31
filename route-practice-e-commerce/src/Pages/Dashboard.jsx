import React from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';
const Dashboard = () => {
  let navigate = useNavigate();
  function handleProfile () {
    let user ={ 
      name: "AHil",
      role :"Developer",
      email:"ahilmakwana26@gmail.com"
    }

    navigate('/dashboard/profile',{
      state:{user}
    });

  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">User Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-2">
          {/* Pass Data using state prop */}

          {/* <Link to={'/dashboard/profile'} state={handleProfile()} className="block p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-100 transition-colors">
            Profile
          </Link> */}

            {/* Pass Data using navigate */}
           <button onClick={handleProfile} className="block p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-100 transition-colors">
            Profile
          </button>
          <Link to={'/dashboard/setting'} className="block p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-100 transition-colors">
            Settings
          </Link>
        </aside>
        <main className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-100 min-h-[300px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;