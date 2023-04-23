import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryUpload from "../Create/GalleryUpload";
import SiteFloorPlansUpload from "../Create/SiteFloorPlansUpload";
import AvailabilityPriceUpload from "../Create/AvailabilityPriceUpload";

function EditNewLaunchPage() {
  const { id } = useParams();
  const [newLaunch, setNewLaunch] = useState({
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
  const navigate = useNavigate();

  useEffect(() => {
    const getNewLaunch = async () => {
      const response = await fetch(`/api/newlaunches/${id}`);
      const newLaunch = await response.json();
      setNewLaunch(newLaunch);
    };
    getNewLaunch();
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;

    setNewLaunch({ ...newLaunch, [key]: value });
  };

  const setGallery = (arrayS3URI: string[]) => {
    setNewLaunch((prevNewLaunch) => ({
      ...prevNewLaunch,
      gallery: arrayS3URI,
    }));
  };

  const setSiteFloorPlans = (arrayS3URI: string[]) => {
    setNewLaunch((prevNewLaunch) => ({
      ...prevNewLaunch,
      siteFloorPlans: arrayS3URI,
    }));
  };

  const setAvailabilityPrice = (arrayS3URI: string[]) => {
    setNewLaunch((prevNewLaunch) => ({
      ...prevNewLaunch,
      availabilityPrice: arrayS3URI,
    }));
  };

  return (
    <div className=" flex justify-center">
      <div className=" flex justify-center font-bold my-6">
        <h1>Edit New Launch Details</h1>
      </div>
      <br />
      <label className=" font-semibold">Project Name: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="name"
        value={newLaunch.name}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">Developer: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="developer"
        value={newLaunch.developer}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">Type: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="type"
        value={newLaunch.type}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">Total Units: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="units"
        value={newLaunch.units}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">Site Area: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="siteArea"
        value={newLaunch.siteArea}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">Estimated TOP: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="expTOP"
        value={newLaunch.expTOP}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">Address: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="address"
        value={newLaunch.address}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">District: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="district"
        value={newLaunch.district}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">Tenure: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="tenure"
        value={newLaunch.tenure}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">Description: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="description"
        value={newLaunch.description}
        onChange={handleChange}
      ></input>
      <br />
      <label className=" font-semibold">Key Points: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="keyPoints"
        value={newLaunch.keyPoints}
        onChange={handleChange}
      ></input>
      <br />
      <GalleryUpload onUpload={setGallery} />
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
      <SiteFloorPlansUpload onUpload={setSiteFloorPlans} />
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
      <AvailabilityPriceUpload onUpload={setAvailabilityPrice} />
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
  );
}

export default EditNewLaunchPage;
