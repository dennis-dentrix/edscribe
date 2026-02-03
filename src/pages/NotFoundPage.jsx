import React from "react";
import { Link } from "react-router-dom";
import { CircleHelp } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="empty-state py-16">
          <CircleHelp className="w-30 h-30 mx-auto text-neutral-300 mb-6" aria-hidden="true" />
          <h3>Page Not Found</h3>
          <p className="text-neutral-600 mb-6">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-secondary">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
