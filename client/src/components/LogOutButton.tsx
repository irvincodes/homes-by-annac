import React from "react";
import { TbDoorExit } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

interface User {
  accountType?: string;
  name?: string;
  password?: string;
}

interface LogOutButtonProps {
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const LogOutButton = (props: LogOutButtonProps) => {
  console.log("LogOutButton fired!");
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    props.setUser({ accountType: undefined });
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={handleLogOut}
        className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
      >
        <TbDoorExit size="1.5rem" className=" accent-white mb-1" />
        Log Out
      </button>
    </div>
  );
};

export default LogOutButton;
