import React from 'react';

export default function Dashboard() {
  return (
    <div className="page">
      <div className="container">
        <div className="dashboard-header mb-8">
          <h1>Dashboard</h1>
          <p className="text-neutral-600">Welcome to your academic dashboard</p>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="empty-state py-16 px-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-30 h-30 mx-auto text-neutral-300 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
              <h3>No Orders Yet</h3>
              <p className="text-neutral-600 mb-6">You haven't placed any orders yet. Start by creating your first order.</p>
              <a href="/orders/new" className="btn btn-primary">Create Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

