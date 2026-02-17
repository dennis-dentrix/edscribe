import React, { useMemo, useState } from "react";
import orderService from "../services/orderService";

export default function CreateOrder() {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    educationLevel: "undergraduate",
    taskType: "essay",
    description: "",
    additionalInstructions: "",
    deadlineHours: "168",
    urgency: "standard",
    complexityLevel: "standard",
    citationStyle: "none",
    numberOfSources: 0,
    pageCount: 1,
  });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const basePrice = useMemo(() => {
    const pages = Number(formData.pageCount || 1);
    return Math.max(1, pages) * 10;
  }, [formData.pageCount]);

  const totalPrice = basePrice;

  const deadlineDate = useMemo(() => {
    const hours = Number(formData.deadlineHours || 0);
    return new Date(Date.now() + hours * 60 * 60 * 1000);
  }, [formData.deadlineHours]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const selected = Array.from(event.target.files || []);
    setFiles(selected);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("title", formData.title.trim());
      payload.append("subject", formData.subject.trim());
      payload.append("educationLevel", formData.educationLevel);
      payload.append("taskType", formData.taskType);
      payload.append("description", formData.description.trim());
      payload.append(
        "additionalInstructions",
        formData.additionalInstructions.trim(),
      );
      payload.append("deadline", deadlineDate.toISOString());
      payload.append("urgency", formData.urgency);
      payload.append("complexityLevel", formData.complexityLevel);
      payload.append("citationStyle", formData.citationStyle);
      payload.append("numberOfSources", String(formData.numberOfSources || 0));
      payload.append("pageCount", String(formData.pageCount || 1));
      payload.append("basePrice", String(basePrice));
      payload.append("totalPrice", String(totalPrice));
      payload.append("currency", "USD");

      files.forEach((file) => payload.append("attachments", file));

      await orderService.createOrder(payload);
      setSuccess("Order submitted successfully.");
      setFiles([]);
    } catch (err) {
      setError(err?.message || "Failed to submit order.");
    } finally {
      setSubmitting(false);
    }
  };

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
              <form className="order-form" onSubmit={handleSubmit}>
                {error && <div className="alert alert-error">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <div className="form-group">
                  <label className="form-label" htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-input"
                    placeholder="Enter your paper title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="e.g. Psychology"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="educationLevel">Education Level</label>
                    <select
                      id="educationLevel"
                      name="educationLevel"
                      className="form-input form-select"
                      value={formData.educationLevel}
                      onChange={handleChange}
                    >
                      <option value="high_school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="taskType">Task Type</label>
                    <select
                      id="taskType"
                      name="taskType"
                      className="form-input form-select"
                      value={formData.taskType}
                      onChange={handleChange}
                    >
                      <option value="quiz">Quiz</option>
                      <option value="essay">Essay</option>
                      <option value="research_paper">Research Paper</option>
                      <option value="technical_writing">Technical Writing</option>
                      <option value="report">Report</option>
                      <option value="presentation">Presentation</option>
                      <option value="editing">Editing</option>
                      <option value="proofreading">Proofreading</option>
                      <option value="research_assistance">Research Assistance</option>
                      <option value="tutoring">Tutoring</option>
                      <option value="formatting">Formatting</option>
                      <option value="study_support">Study Support</option>
                      <option value="thesis">Thesis</option>
                      <option value="dissertation">Dissertation</option>
                      <option value="case_study">Case Study</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-input form-textarea"
                    placeholder="Describe your requirements in detail..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="additionalInstructions">Additional Instructions</label>
                  <textarea
                    id="additionalInstructions"
                    name="additionalInstructions"
                    className="form-input form-textarea"
                    placeholder="Optional extra guidance..."
                    value={formData.additionalInstructions}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="deadline">Deadline</label>
                    <select
                      id="deadline"
                      name="deadlineHours"
                      className="form-input form-select"
                      value={formData.deadlineHours}
                      onChange={handleChange}
                    >
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
                      name="pageCount"
                      className="form-input"
                      placeholder="1"
                      min="1"
                      value={formData.pageCount}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="urgency">Urgency</label>
                    <select
                      id="urgency"
                      name="urgency"
                      className="form-input form-select"
                      value={formData.urgency}
                      onChange={handleChange}
                    >
                      <option value="standard">Standard</option>
                      <option value="rush">Rush</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="complexityLevel">Complexity</label>
                    <select
                      id="complexityLevel"
                      name="complexityLevel"
                      className="form-input form-select"
                      value={formData.complexityLevel}
                      onChange={handleChange}
                    >
                      <option value="basic">Basic</option>
                      <option value="standard">Standard</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="citationStyle">Citation Style</label>
                    <select
                      id="citationStyle"
                      name="citationStyle"
                      className="form-input form-select"
                      value={formData.citationStyle}
                      onChange={handleChange}
                    >
                      <option value="none">None</option>
                      <option value="apa">APA</option>
                      <option value="mla">MLA</option>
                      <option value="chicago">Chicago</option>
                      <option value="harvard">Harvard</option>
                      <option value="ieee">IEEE</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="numberOfSources">Number of Sources</label>
                  <input
                    type="number"
                    id="numberOfSources"
                    name="numberOfSources"
                    className="form-input"
                    min="0"
                    value={formData.numberOfSources}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="files">Attachments</label>
                  <input
                    type="file"
                    id="files"
                    className="form-input"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>

                <button className="btn btn-primary btn-lg w-full mt-6" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Order"}
                </button>
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
                    <span className="font-semibold">${basePrice}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-200">
                    <span className="text-neutral-600">Deadline</span>
                    <span className="font-semibold">{deadlineDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between py-2 pt-4">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-primary-700 text-xl">${totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
