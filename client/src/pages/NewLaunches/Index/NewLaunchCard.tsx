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
    <div>
      <Link
        to={`/newlaunches/${property._id}`}
        className="text-wAqua hover:underline"
      >
        <h1>{property.name}</h1>
        <div className=" w-40">
          <img src={property.gallery[0]} />
        </div>
        <div>District: {property.district}</div>
        <div>Units: {property.units}</div>
        <div>Est. TOP Year: {property.expTOP}</div>
      </Link>
    </div>
  );
}

export default NewLaunchCard;
