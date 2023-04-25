import React from "react";
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

function NewLaunchCard({ property }: { property: NewLaunch }) {
  return (
    <div className="flex justify-center bg-slate-100 py-2">
      <Link
        to={`/newlaunches/${property._id}`}
        className="text-wAqua hover:underline"
      >
        <h1 className=" font-bold text-center mb-4">{property.name}</h1>
        <div className=" flex justify-center">
          <img
            className=" border-2 border-gray-500 w-44 h-44 object-cover object-center mb-4"
            src={property.gallery[0]}
          />
        </div>
        <div>
          <div>
            <span className="font-semibold text-right">District: </span>
            {property.district}
          </div>
          <div>
            <span className="font-semibold">Units: </span>
            {property.units}
          </div>
          <div>
            <span className="font-semibold">Est. TOP Year: </span>
            {property.expTOP}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewLaunchCard;
