import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GalleryUpload from "../Create/GalleryUpload";
import SiteFloorPlansUpload from "../Create/SiteFloorPlansUpload";
import AvailabilityPriceUpload from "../Create/AvailabilityPriceUpload";

function NewLaunchDetailsPage() {
  const { id } = useParams();
  const [newLaunch, setNewLaunch] = useState({
    _id: "",
    name: "",
    developer: "",
    type: "",
    units: "",
    siteArea: "",
    expTOP: "",
    address: "",
    district: "",
    tenure: "",
    description: "",
    keyPoints: "",
    gallery: [] as string[],
    siteFloorPlans: [] as string[],
    availabilityPrice: [] as string[],
  });

  useEffect(() => {
    const getNewLaunch = async () => {
      const response = await fetch(`/api/newlaunches/${id}`);
      const newLaunch = await response.json();
      setNewLaunch(newLaunch);
    };
    getNewLaunch();
  }, [id]);

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <div className=" flex justify-center font-bold my-6">
          <h1>{newLaunch.name}</h1>
        </div>
        <br />
        <label className=" font-semibold">Developer: </label>
        <br />
        <div>{newLaunch.developer}</div>
        <br />
        <label className=" font-semibold">Type: </label>
        <br />
        <div>{newLaunch.type}</div>
        <br />
        <label className=" font-semibold">Total Units: </label>
        <br />
        <div>{newLaunch.units}</div>
        <br />
        <label className=" font-semibold">Site Area: </label>
        <br />
        <div>{newLaunch.siteArea}</div>
        <br />
        <label className=" font-semibold">Estimated TOP: </label>
        <br />
        <div>{newLaunch.expTOP}</div>
        <br />
        <label className=" font-semibold">Address: </label>
        <br />
        <div>{newLaunch.address}</div>
        <br />
        <label className=" font-semibold">District: </label>
        <br />
        <div>{newLaunch.district}</div>
        <br />
        <label className=" font-semibold">Tenure: </label>
        <br />
        <div>{newLaunch.tenure}</div>
        <br />
        <label className=" font-semibold">Description: </label>
        <br />
        <div>{newLaunch.description}</div>
        <br />
        <label className=" font-semibold">Key Points: </label>
        <br />
        <div>{newLaunch.keyPoints}</div>
        <br />
        <label className=" font-semibold">Gallery: </label>
        <div className="imagesContainer grid grid-cols-4">
          {newLaunch.gallery.map((imgURL, index) => (
            <img
              className=" w-40"
              key={index}
              src={imgURL}
              alt={`Image ${index}`}
            />
          ))}
        </div>
        {/* <label className=" font-semibold">Gallery: </label>
            <br />
            <input
              className="mb-4 w-96 py-2"
              name="gallery"
              type="file"
              id="gallery-upload"
              onChange={(e) => handleFileChange(e, "gallery")}
              multiple
            /> */}
        {/* <input
              className="mb-4 w-96 bg-gray-200 p-2"
              name="gallery"
              value={newLaunch.gallery}
              onChange={handleChange}
            ></input> */}
        <br />
        <label className=" font-semibold">Site & Floor Plans: </label>
        <div className="imagesContainer grid grid-cols-4">
          {newLaunch.siteFloorPlans.map((imgURL, index) => (
            <div className="w-40">
              <img
                className=""
                key={index}
                src={imgURL}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
        {/* <label className=" font-semibold">Site/Floor Plans: </label>
            <br /> */}
        {/* <input
              className="mb-4 w-96 py-2"
              name="siteFloorPlans"
              type="file"
              id="sitefloorplans-upload"
              onChange={(e) => handleFileChange(e, "siteFloorPlans")}
              multiple
            /> */}
        {/* <input
              className="mb-4 w-96 bg-gray-200 p-2"
              name="siteFloorPlans"
              value={newLaunch.siteFloorPlans}
              onChange={handleChange}
            ></input> */}
        <br />
        <label className=" font-semibold">Availability & Price: </label>
        <div className="imagesContainer grid grid-cols-4">
          {newLaunch.availabilityPrice.map((imgURL, index) => (
            <div className="imageContainer w-40">
              <img
                className=""
                key={index}
                src={imgURL}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
        {/* <label className=" font-semibold">Price & Availability: </label>
            <br /> */}
        {/* <input
              className="mb-4 w-96 py-2"
              name="availabilityPrice"
              type="file"
              id="availabilityprice-upload"
              onChange={(e) => handleFileChange(e, "availabilityPrice")}
              multiple
            /> */}
        {/* <input
              className="mb-4 w-96 bg-gray-200 p-2"
              name="availabilityPrice"
              value={newLaunch.availabilityPrice}
              onChange={handleChange}
            ></input> */}
        <br />
        <button className=" bg-teal-200 py-2 px-4 border-2 border-cyan-950 rounded-md font-semibold">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default NewLaunchDetailsPage;
