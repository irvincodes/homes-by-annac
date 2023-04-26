import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookmarkButton from "../../../components/BookmarkButton";

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

interface NewLaunchCardProps {
  property: NewLaunch;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

function NewLaunchCard(props: NewLaunchCardProps) {
  const [bookmarkedLaunches, setbookmarkedLaunches] = useState<NewLaunch[]>([]);
  if (props.user !== undefined) {
    useEffect(() => {
      const fetchBookmarkedLaunches = async () => {
        try {
          const response = await fetch(`/api/members/${props.user._id}`);
          const data = await response.json();
          setbookmarkedLaunches(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchBookmarkedLaunches();
    }, []);
  }

  const removeNewLaunch = (newLaunchId: string) => {
    console.log("removeNewLaunch fired!");
    setbookmarkedLaunches(
      bookmarkedLaunches.filter((launch) => launch._id !== newLaunchId)
    );
  };

  return (
    <div className="flex justify-center bg-slate-100 py-2">
      <Link
        to={`/newlaunches/${props.property._id}`}
        className="text-wAqua hover:underline"
      >
        <h1 className=" font-bold text-center mb-4">{props.property.name}</h1>
        <div className=" flex justify-center">
          <img
            className=" border-2 border-gray-500 w-44 h-44 object-cover object-center mb-4"
            src={props.property.gallery[0]}
          />
        </div>
        <div>
          <div>
            <span className="font-semibold text-right">District: </span>
            {props.property.district}
          </div>
          <div>
            <span className="font-semibold">Units: </span>
            {props.property.units}
          </div>
          <div>
            <span className="font-semibold">Est. TOP Year: </span>
            {props.property.expTOP}
          </div>
        </div>
      </Link>
      <span>
        <BookmarkButton
          id={props.user._id!}
          newLaunchId={props.property._id}
          removeNewLaunch={removeNewLaunch}
        />
      </span>
    </div>
  );
}

export default NewLaunchCard;
