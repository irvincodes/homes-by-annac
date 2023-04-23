import React from "react";

interface NewLaunch {
  name: string;
  gallery: string;
  district: string;
  units: number;
  expTOP: string;
}

function NewLaunchCard({ newLaunch }: { newLaunch: NewLaunch }) {
  return (
    <div>
      <h1>{newLaunch.name}</h1>
      <div className=" w-40">
        <img src={newLaunch.gallery[0]} />
      </div>
      <div>District: {newLaunch.district}</div>
      <div>Units: {newLaunch.units}</div>
      <div>Est. TOP Year: {newLaunch.expTOP}</div>
    </div>
  );
}

export default NewLaunchCard;
