import React from 'react';

export default function CreateOrder() {
  return (
    <div className="page">
      <div className="container">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-8">
            <h1>Create New Order</h1>
            <p className="text-neutral-600">Fill out the form below to place your order</p>
          </div>

          <div className="card mb-6">
            <div className="card-header">
              <h3>Order Details</h3>
              <p className="text-neutral-600 text-sm">Provide details about your academic work</p>
            </div>
            <div className="card-body">
              <form className="order-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    className="form-input"
                    placeholder="Enter your paper title"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="educationLevel">Education Level</label>
                    <select id="educationLevel" className="form-input form-select">
                      <option value="high_school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="taskType">Task Type</label>
                    <select id="taskType" className="form-input form-select">
                      <option value="essay">Essay</option>
                      <option value="research_paper">Research Paper</option>
                      <option value="thesis">Thesis</option>
                      <option value="dissertation">Dissertation</option>
                      <option value="technical">Technical Writing</option>
                      <option value="report">Report</option>
                      <option value="editing">Editing</option>
                      <option value="proofreading">Proofreading</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    className="form-input form-textarea"
                    placeholder="Describe your requirements in detail..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="deadline">Deadline</label>
                    <select id="deadline" className="form-input form-select">
                      <option value="24">24 hours</option>
                      <option value="48">48 hours</option>
                      <option value="72">3 days</option>
                      <option value="168">7 days</option>
                      <option value="336">14 days</option>
                      <option value="720">30 days</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="pages">Number of Pages</label>
                    <input
                      type="number"
                      id="pages"
                      className="form-input"
                      placeholder="1"
                      min="1"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="files">Attachments</label>
                  <input
                    type="file"
                    id="files"
                    className="form-input"
                    multiple
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="order-summary bg-primary-50 rounded-xl p-6">
                <h3 className="mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-neutral-200">
                    <span className="text-neutral-600">Estimated Price</span>
                    <span className="font-semibold">$--</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-200">
                    <span className="text-neutral-600">Deadline</span>
                    <span className="font-semibold">--</span>
                  </div>
                  <div className="flex justify-between py-2 pt-4">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-primary-700 text-xl">$--</span>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary btn-lg w-full mt-6">
                Submit Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

