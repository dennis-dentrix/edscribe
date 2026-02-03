import React from "react";
import { FileQuestion } from "lucide-react";

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
              <FileQuestion className="w-30 h-30 mx-auto text-neutral-300 mb-6" aria-hidden="true" />
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
