import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNewLaunchPage() {
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
    gallery: "",
    siteFloorPlans: "",
    availabilityPrice: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createNewLaunch = async () => {
      const response = await fetch("/api/newlaunches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLaunch),
      });
      if (response.ok) {
        console.log("created new launch");
        navigate("/newlaunches");
      } else {
        console.log("unable to create New Launch!");
      }
    };
    createNewLaunch();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLaunch({ ...newLaunch, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className=" flex justify-center">
        <div className=" ">
          <div>
            <h2 className=" flex justify-center font-bold my-6">
              Add New Launch Project
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" bg-pink-200 px-36 py-6 rounded-lg "
          >
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
            <label className=" font-semibold">Gallery: </label>
            <br />
            <input
              className="mb-4 w-96 bg-gray-200 p-2"
              name="gallery"
              value={newLaunch.gallery}
              onChange={handleChange}
            ></input>
            <br />
            <label className=" font-semibold">Site/Floor Plans: </label>
            <br />
            <input
              className="mb-4 w-96 bg-gray-200 p-2"
              name="siteFloorPlans"
              value={newLaunch.siteFloorPlans}
              onChange={handleChange}
            ></input>
            <br />
            <label className=" font-semibold">Price & Availability: </label>
            <br />
            <input
              className="mb-4 w-96 bg-gray-200 p-2"
              name="availabilityPrice"
              value={newLaunch.availabilityPrice}
              onChange={handleChange}
            ></input>
            <br />
            <button className=" bg-teal-200 py-2 px-4 border-2 border-cyan-950 rounded-md font-semibold">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewLaunchPage;
