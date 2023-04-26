import React from "react";
import { useState, useEffect } from "react";
import NewLaunchCard from "../../NewLaunches/Index/NewLaunchCard";

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

interface BookmarksPageProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const BookmarksPage = (props: BookmarksPageProps) => {
  const [bookmarkedLaunches, setBookmarkedLaunches] = useState<NewLaunch[]>([]);

  useEffect(() => {
    const fetchBookmarkedLaunches = async () => {
      console.log("fetchBookmarkedLaunches fired");
      try {
        console.log("try fired");
        const token = localStorage.getItem("token");
        const response = await fetch(`/api/members/${props.user._id}`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        console.log("response: ", response);
        const data = await response.json();
        setBookmarkedLaunches(data);
        console.log("bookmarkedLaunches: ", bookmarkedLaunches);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookmarkedLaunches();
  }, []);

  return (
    <>
      <div>
        <div className=" my-4 font-bold flex justify-center">
          <h1 className="text-2xl">Bookmarked New Launches</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {bookmarkedLaunches?.map((bookmark) => (
            <div
              key={bookmark._id}
              className="border border-slate-600 rounded-md p-2"
            >
              <NewLaunchCard
                user={props.user}
                property={bookmark}
                setUser={props.setUser}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookmarksPage;
