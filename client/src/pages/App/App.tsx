import "./App.css";
import { Routes, Route } from "react-router";
import MembersNavBar from "../Members/MembersNavBar";
import MembersMainPage from "../Members/MembersMainPage";
import AddNewLaunchPage from "../NewLaunches/Create/AddNewLaunchPage";
import NewLaunchesPage from "../NewLaunches/Index/NewLaunchesPage";

function App() {
  return (
    <div>
      <div className="flex h-screen flex-col justify-between">
        <MembersNavBar></MembersNavBar>
        <div className="flex-1 overflow-y-scroll md:px-28 md:py-2">
          <Routes>
            <Route path="/" element={<MembersMainPage />} />
            <Route path="/newlaunches/new" element={<AddNewLaunchPage />} />
            <Route path="/newlaunches" element={<NewLaunchesPage />} />
          </Routes>
          {/* <div className="App bg-teal-200">Hello World</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
