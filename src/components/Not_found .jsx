import React from "react";
import { Link } from "react-router-dom";
import angry from "../../src/assets/images/sponsor/404.png";
// import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">
      {/* <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet> */}
      <div
        className="text-center p-4 p-md-5 w-100"
        style={{ maxWidth: "600px" }}
      >
        <img
          src={angry}
          alt="Confused Person"
          className="img-fluid rounded-circle shadow-lg mb-4"
          style={{ maxWidth: "300px", height: "auto" }}
        />
        <h1 className="display-4 fw-bold mb-3">404 - Page Not Found</h1>
        <p className="fs-5 text-light mb-3">
          Oops! It seems the page you're looking for doesn't exist.
        </p>
        <p className="fs-6 text-muted mb-4">
          Please check the URL or click the button below to return to our
          homepage.
        </p>
        <Link
          to="/"
          className="btn btn-warning btn-lg fw-semibold shadow-sm px-4 py-2"
        >
          Take Me Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
