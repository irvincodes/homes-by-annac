import React from "react";
import { Link } from "react-router-dom";

function LoggedOutOptions() {
  return (
    <>
      <li>
        <Link
          to="/signup"
          className="block px-3 py-2 text-wAqua hover:bg-gray-100"
        >
          New Member
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className="block px-3 py-2 text-wAqua hover:bg-gray-100"
        >
          Member Log In
        </Link>
      </li>
    </>
  );
}

export default LoggedOutOptions;
