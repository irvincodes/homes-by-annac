import React from "react";
import SearchFilter from "./SearchFilter";
import { useState, useEffect } from "react";
import NewLaunchCard from "./NewLaunchCard";

interface NewLaunch {
  _id: string;
  name: string;
  gallery: string;
  district: string;
  units: number;
  expTOP: string;
}

function NewLaunchesPage() {
  const [newLaunches, setNewLaunches] = useState<NewLaunch[]>([]);

  useEffect(() => {
    const fetchNewLaunches = async () => {
      console.log("fetchNewLaunches fired");
      try {
        console.log("try fired");
        const response = await fetch("/api/newlaunches");
        console.log("response: ", response);
        const data = await response.json();
        setNewLaunches(data);
        console.log("newLaunches: ", newLaunches);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewLaunches();
  }, []);

  return (
    <>
      <div className="">
        <div className=" my-4 font-bold flex justify-center">
          <h1>New Launches</h1>
        </div>
        <div className=" my-4 flex justify-center">
          <SearchFilter />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {newLaunches?.map((newLaunch) => (
            <div
              key={newLaunch._id}
              className="border border-slate-600 rounded-md p-2"
            >
              <NewLaunchCard newLaunch={newLaunch} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NewLaunchesPage;
