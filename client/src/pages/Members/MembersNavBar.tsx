import { Link } from "react-router-dom";
import { useState } from "react";
import LoggedInOptions from "../../components/LoggedInOptions";
import LoggedOutOptions from "../../components/LoggedOutOptions";
import { BsHouseHeart } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BsBookmarkStar } from "react-icons/bs";
import { RiChatHeartLine } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import { TbCircleKey } from "react-icons/tb";
import { GiHeartKey } from "react-icons/gi";
import LogOutButton from "../../components/LogOutButton";
import { mainLogo } from "../../assets/assets";

interface User {
  accountType?: string;
  name?: string;
  password?: string;
  _id?: string;
}

interface MembersNavBarProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export default function MembersNavBar(props: MembersNavBarProps) {
  const [dropdownVisibile, setDropdownVisible] = useState(false);

  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisibile);
  };

  return (
    <>
      <nav className=" bg-rose-100 px-2 py-3 z-50 sticky border-b border-black">
        <div className="container mx-auto flex items-center justify-between justify-items-center">
          <img
            src={mainLogo}
            className=" h-20 w-20 border-4 border-y-pink-200"
          />
          <Link
            to=""
            className=" ml-[50%] flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
          >
            <BsHouseHeart size="1.5rem" className=" accent-white mb-1" />
            <p className=" font-semibold">Home</p>
          </Link>

          {props.user.accountType !== undefined &&
          props.user.accountType !== "Admin" ? (
            <Link
              to={`/members/${props.user._id}/bookmarks`}
              className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300 "
            >
              <BsBookmarkStar size="1.5rem" className=" accent-white mb-1" />
              <p className=" font-semibold">My Bookmarks</p>
            </Link>
          ) : (
            ""
          )}

          {/* <Link
            to=""
            className=" ml-[50%] flex flex-col items-center hover:text-pink-600 transition-colors duration-300 "
          >
            <BsBookmarkStar size="1.5rem" className=" accent-white mb-1" />
            <p>My Bookmarks</p>
          </Link> */}

          {props.user.accountType === "Admin" ? (
            ""
          ) : (
            <Link
              to="/contact"
              className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
            >
              <RiChatHeartLine size="1.5rem" className=" accent-white mb-1" />
              <p className=" font-semibold">Contact</p>
            </Link>
          )}

          {/* <Link
            to=""
            className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
          >
            <RiChatHeartLine size="1.5rem" className=" accent-white mb-1" />
            <p>Contact</p>
          </Link> */}
          <Link
            to="/newlaunches"
            className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
          >
            <BiBuildingHouse size="1.5rem" className=" accent-white mb-1" />
            <p className=" font-semibold">New Launches</p>
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

          {props.user.accountType !== undefined ? (
            <LogOutButton setUser={props.setUser} />
          ) : (
            <div>
              <button
                onClick={handleDropdown}
                className="flex flex-col items-center hover:text-pink-600 transition-colors duration-300"
              >
                <GiHeartKey size="1.5rem" className=" accent-white mb-1" />
                <p className=" font-semibold">Log In</p>
              </button>
              {dropdownVisibile && (
                <ul className=" flex flex-col items-center absolute mr-32 right-4 left-auto z-10 divide-y divide-rose-500 whitespace-nowrap border-2 border-rose-200 bg-white">
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
