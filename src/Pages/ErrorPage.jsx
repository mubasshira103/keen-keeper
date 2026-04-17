import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">

        {/* Error Code */}
        <h1 className="text-7xl font-bold text-green-700">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-base-content/70">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go Back
          </button>

          <Link to="/" className="btn text-white bg-green-700">
            Go Home
          </Link>
        </div>



      </div>
    </div>
    );
};

export default ErrorPage;
