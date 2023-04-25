import { Link } from "react-router-dom";
import { useState } from "react";
import LoggedInOptions from "./LoggedInOptions";
import LoggedOutOptions from "./LoggedOutOptions";
import { BsHouseHeart } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BsBookmarkStar } from "react-icons/bs";
import { RiChatHeartLine } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import { TbCircleKey } from "react-icons/tb";
import { GiHeartKey } from "react-icons/gi";
import { TbDoorExit } from "react-icons/tb";
import LogOutButton from "./LogOutButton";

interface User {
  accountType?: string;
  name?: string;
  password?: string;
}

export interface MembersNavBarProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export default function MembersNavBar(props: MembersNavBarProps) {
  const [dropdownVisbile, setDropdownVisible] = useState(false);

  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisbile);
  };

  return (
    <>
      <nav className=" bg-rose-100 px-2 py-6 z-50 sticky border-b border-black">
        <div className="container mx-auto flex items-center justify-between justify-items-center">
          <Link
            to=""
            className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
          >
            <BsHouseHeart size="1.5rem" className=" accent-white mb-1" />
            <p>Home</p>
          </Link>
          <Link
            to=""
            className=" ml-[50%] flex flex-col items-center hover:text-pink-600 transition-colors duration-300 "
          >
            <BsBookmarkStar size="1.5rem" className=" accent-white mb-1" />
            <p>My Bookmarks</p>
          </Link>
          <Link
            to=""
            className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
          >
            <RiChatHeartLine size="1.5rem" className=" accent-white mb-1" />
            <p>Contact</p>
          </Link>
          <Link
            to="/newlaunches"
            className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
          >
            <BiBuildingHouse size="1.5rem" className=" accent-white mb-1" />
            <p>New Launches</p>
          </Link>
          {/* {props.user ? (
            <Link to="" onClick={handleDropdown}>
              Log Out
            </Link>
          ) : (
            <Link to="" onClick={handleDropdown}>
              Log In
            </Link>
          )}
          {dropdown ? (
            <ul>
              <LoggedInOptions user={props.user} setUser={props.setUser} />
            </ul>
          ) : null} */}
          {/* <div>
            <button
              onClick={handleDropdown}
              className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
            >
              <GiHeartKey size="1.5rem" className=" accent-white mb-1" />
              Log In
            </button>
            {dropdownVisbile ? (
              <ul className="absolute mr-32 right-4 left-auto z-10 divide-y whitespace-nowrap border-2 bg-white">
                {props.user ? (
                  <LoggedInOptions user={props.user} setUser={props.setUser} />
                ) : (
                  <LoggedOutOptions />
                )}
              </ul>
            ) : null}
          </div> */}
          {props.user ? (
            <LogOutButton />
          ) : (
            <div>
              <button
                onClick={handleDropdown}
                className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
              >
                <GiHeartKey size="1.5rem" className=" accent-white mb-1" />
                Log In
              </button>
              {dropdownVisbile && (
                <ul className="absolute mr-32 right-4 left-auto z-10 divide-y whitespace-nowrap border-2 bg-white">
                  <LoggedOutOptions />
                </ul>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
