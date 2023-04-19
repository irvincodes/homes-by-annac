import { Link } from "react-router-dom";

export default function MembersNavBar() {
  return (
    <>
      <nav className=" bg-teal-200 px-2 py-6 sticky">
        <div className="container mx-auto flex items-center justify-between justify-items-center">
          <Link to="">Home</Link>
          <Link to="" className=" ml-[50%]">
            My Bookmarks
          </Link>
          <Link to="">Contact</Link>
          <Link to="">New Launches</Link>
          <button>Log Out</button>
        </div>
      </nav>
    </>
  );
}
