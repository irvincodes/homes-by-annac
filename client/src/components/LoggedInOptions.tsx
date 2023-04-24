import React from "react";
import { Link } from "react-router-dom";

interface User {
  accountType?: string;
  name?: string;
  password?: string;
}

interface LoggedInOptionsProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

function LoggedInOptions(props: LoggedInOptionsProps) {
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

export default LoggedInOptions;
