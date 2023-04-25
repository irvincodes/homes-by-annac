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
          Member Sign In
        </Link>
      </li>
      <li>
        <Link
          to="/admin/login"
          className="block px-3 py-2 text-wAqua hover:bg-gray-100"
        >
          Admin Sign In
        </Link>
      </li>
    </>
  );
}

export default LoggedOutOptions;
