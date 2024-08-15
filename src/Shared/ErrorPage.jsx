import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
