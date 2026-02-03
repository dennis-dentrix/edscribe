import React from 'react';

export default function OrderDetails() {
  return (
    <div className="page">
      <div className="container">
        <div className="max-w-[900px] mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1>Order Details</h1>
              <p className="text-neutral-600">View your order information</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="badge badge-primary">In Progress</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card mb-6">
                <div className="card-header">
                  <h3>Order Information</h3>
                </div>
                <div className="card-body">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <span className="text-neutral-600">Order ID</span>
                      <span className="font-medium">#--</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <span className="text-neutral-600">Title</span>
                      <span className="font-medium">Sample Order</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <span className="text-neutral-600">Status</span>
                      <span className="badge badge-primary">In Progress</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <span className="text-neutral-600">Task Type</span>
                      <span className="font-medium">Essay</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <span className="text-neutral-600">Education Level</span>
                      <span className="font-medium">Undergraduate</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-neutral-100">
                      <span className="text-neutral-600">Pages</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-neutral-600">Deadline</span>
                      <span className="font-medium">--</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3>Description</h3>
                </div>
                <div className="card-body">
                  <p className="text-neutral-600">
                    Order description will appear here once submitted.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="card mb-6">
                <div className="card-header">
                  <h3>Order Summary</h3>
                </div>
                <div className="card-body">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Price</span>
                      <span className="font-medium">$--</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Status</span>
                      <span className="badge badge-success">Paid</span>
                    </div>
                    <div className="pt-3 border-t border-neutral-200">
                      <div className="flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-primary-700">$--</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3>Actions</h3>
                </div>
                <div className="card-body space-y-3">
                  <button className="btn btn-primary btn-block">
                    Message Writer
                  </button>
                  <button className="btn btn-secondary btn-block">
                    Download Files
                  </button>
                  <button className="btn btn-outline btn-block">
                    Request Revision
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

