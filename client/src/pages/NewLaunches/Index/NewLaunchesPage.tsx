import React from "react";
import SearchFilter from "./SearchFilter";
import { useState, useEffect } from "react";
import NewLaunchCard from "./NewLaunchCard";
import { Link } from "react-router-dom";

interface NewLaunch {
  _id: string;
  name: string;
  developer: string;
  type: string;
  units: number;
  siteArea: string;
  expTOP: string;
  address: string;
  district: string;
  tenure: string;
  description: string;
  keyPoints: string;
  gallery: string[];
  siteFloorPlans: string[];
  availabilityPrice: string[];
}

interface User {
  accountType?: string;
  name?: string;
  password?: string;
  _id?: string;
}

interface NewLaunchesPageProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

function NewLaunchesPage(props: NewLaunchesPageProps) {
  const [newLaunches, setNewLaunches] = useState<NewLaunch[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState(
    "--- Display All New Launches ---"
  );

  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
  };

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

  const filteredNewLaunches =
    selectedDistrict === "--- Display All New Launches ---"
      ? newLaunches
      : newLaunches.filter((d) => d.district === selectedDistrict);

  return (
    <>
      <div className="">
        <div className=" my-4 font-bold flex justify-center">
          <h1 className="text-4xl">New Launches</h1>
        </div>
        <div className=" mt-8 font-bold flex justify-center">
          <button className=" bg-teal-200 py-2 px-4 border-2 mt-2 w-40 border-cyan-950 rounded-md font-semibold">
            <Link to="/newlaunches/new">Add New Listing</Link>
          </button>
        </div>
        <div className=" my-4 flex justify-center">
          <SearchFilter
            options={
              [
                "--- Display All New Launches ---",
                ...new Set(newLaunches.map((nl) => nl.district)),
              ] as string[]
            }
            value={selectedDistrict}
            onValueChange={handleDistrictChange}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {filteredNewLaunches?.map((newLaunch) => (
            <div
              key={newLaunch._id}
              className="border border-slate-600 rounded-md p-2"
            >
              <NewLaunchCard
                property={newLaunch}
                user={props.user}
                setUser={props.setUser}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NewLaunchesPage;
