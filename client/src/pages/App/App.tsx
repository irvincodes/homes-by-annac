import "./App.css";
import { Routes, Route } from "react-router";
import MembersNavBar from "../Members/MembersNavBar";
import MembersMainPage from "../Members/MembersMainPage";
import AddNewLaunchPage from "../NewLaunches/Create/AddNewLaunchPage";
import NewLaunchesPage from "../NewLaunches/Index/NewLaunchesPage";
import NewLaunchDetailsPage from "../NewLaunches/Show/NewLaunchDetailsPage";
import AuthPage from "../Authorisation/AuthPage";
import MembersSignUpPage from "../Members/Create/MembersSignUpPage";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import EditNewLaunchPage from "../NewLaunches/Edit/EditNewLaunchPage";
import { getUser, getToken } from "../../utilities/usersService";
import AdminAuthPage from "../Authorisation/AdminAuthPage";
import BookmarksPage from "../Members/Update/BookmarksPage";

// const AUTHENTICATE = true;

// const ACCOUNT = {
//   accountType: "Member",
//   accountId: "authenticate: false",
// };

interface User {
  accountType?: string;
  name?: string;
  password?: string;
  _id?: string;
}

function App() {
  const [user, setUser] = useState<User>(getUser());
  console.log("user: ", user);
  // useEffect(() => {
  //   const token = localStorage.getItem("token") || null;
  //   if (token) {
  //     const decoded: { [key: string]: any } = jwt_decode(token);
  //     console.log("decoded: ", decoded);
  //     setUser(decoded);
  //   }
  // }, []);

  return (
    <div>
      <div className="flex h-screen flex-col justify-between">
        {/* {user && user.accountType === "Member" ? (
          <MembersNavBar user={user} setUser={setUser} />
        ) : ( */}
        <MembersNavBar user={user} setUser={setUser} />
        {/* )} */}

        <div className="flex-1 overflow-y-scroll md:px-28 md:py-2">
          <Routes>
            <Route path="/" element={<MembersMainPage />} />
            <Route
              path="/newlaunches/new"
              element={<AddNewLaunchPage user={user} />}
            />
            <Route
              path="/newlaunches"
              element={<NewLaunchesPage user={user} setUser={setUser} />}
            />
            <Route
              path="/newlaunches/:id"
              element={<NewLaunchDetailsPage user={user} setUser={setUser} />}
            />
            <Route
              path="/newlaunches/:id/edit"
              element={<EditNewLaunchPage />}
            />
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route
              path="/admin/login"
              element={<AdminAuthPage setUser={setUser} />}
            />
            <Route path="/signup" element={<MembersSignUpPage />} />
            <Route
              path="/members/:id/bookmarks"
              element={<BookmarksPage user={user} setUser={setUser} />}
            />
          </Routes>
          {/* <div className="App bg-teal-200">Hello World</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
