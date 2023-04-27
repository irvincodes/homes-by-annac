import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryUpload from "../Create/GalleryUpload";
import SiteFloorPlansUpload from "../Create/SiteFloorPlansUpload";
import AvailabilityPriceUpload from "../Create/AvailabilityPriceUpload";
import { Link } from "react-router-dom";

interface NewLaunch {
  _id: string;
}

interface User {
  _id?: string;
  accountType?: string;
  name?: string;
  password?: string;
}

interface NewLaunchDetailsPageProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

function NewLaunchDetailsPage(props: NewLaunchDetailsPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const [newLaunches, setNewLaunches] = useState<NewLaunch[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getNewLaunches = async () => {
      const response = await fetch("/api/newlaunches");
      const data = await response.json();
      setNewLaunches(data);
    };
    getNewLaunches();
  }, []);

  const removeNewLaunch = (id: string) => {
    if (newLaunches) {
      setNewLaunches(newLaunches.filter((newLaunch) => newLaunch._id !== id));
    }
  };

  const onDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`/api/newlaunches/${newLaunch._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      if (response.ok) {
        removeNewLaunch(newLaunch._id);
        console.log("newLaunch removed!");
        navigate("/newlaunches");
      } else {
        console.log("unable to delete.");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
    <div className="flex flex-col items-center justify-center">
      <div className="w-4/6">
        <div className=" flex justify-center mt-4">
          <img
            className=" border-2 border-gray-500 w-96 h-96 object-cover object-center mb-4"
            src={newLaunch.gallery[0]}
          />
        </div>
        <div className=" flex justify-center font-bold mb-6">
          <h1 className=" text-2xl">{newLaunch.name}</h1>
        </div>
        <div className="z-0 px-0 mt-2 mb-6">
          <div className="w-full   bg-rose-100 left-0 right-0 mx-auto bg- py-2"></div>
        </div>

        {props.user.accountType !== "Admin" ? (
          ""
        ) : (
          <div className="flex justify-center mb-4">
            <div className=" mr-2">
              <Link to={`/newlaunches/${id}/edit`}>
                <button className=" bg-pink-200 hover:bg-pink-400 py-2 px-4 border-2 mt-2 w-40 border-cyan-950 rounded-md font-semibold">
                  Edit Details
                </button>
              </Link>
            </div>
            <div className="flex justify-center ml-2">
              <button
                onClick={onDelete}
                className=" bg-pink-200 hover:bg-pink-400 py-2 px-4 border-2 mt-2 w-40 border-cyan-950 rounded-md font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        <br />
        <div className="">
          <span className=" font-semibold">Developer: </span>
          {newLaunch.developer}
        </div>
        <br />
        <div className="">
          <span className=" font-semibold">Type: </span>
          {newLaunch.type}
        </div>
        <br />
        <div className="">
          <span className=" font-semibold">Total Units: </span>
          {newLaunch.units}
        </div>
        <br />

        <div className="">
          <span className=" font-semibold">Estimated TOP Year: </span>
          {newLaunch.expTOP}
        </div>
        <br />
        <div className="">
          <span className=" font-semibold">Address: </span>
          {newLaunch.address}
        </div>
        <br />
        <div className="">
          <span className=" font-semibold">District: </span>
          {newLaunch.district}
        </div>
        <br />
        <div className="">
          <span className=" font-semibold">Tenure: </span>
          {newLaunch.tenure}
        </div>
        <br />
        <div className="">
          <span className=" font-semibold">Description: </span>
          {newLaunch.description}
        </div>

        <label className=" font-semibold">Gallery: </label>
        <div className="imagesContainer grid grid-cols-4">
          {newLaunch.gallery.map((imgURL, index) => (
            <img
              className=" border-2 border-gray-500 w-64 h-44 object-cover object-center m-2"
              key={index}
              src={imgURL}
              alt={`Image ${index}`}
            />
          ))}
        </div>

        <br />
        <label className=" font-semibold">Site & Floor Plans: </label>
        <div className="imagesContainer grid grid-cols-4">
          {newLaunch.siteFloorPlans.map((imgURL, index) => (
            <div className="">
              <img
                className="border-2 border-gray-500 w-64 h-44 object-cover object-center m-2"
                key={index}
                src={imgURL}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>

        <br />
        <label className=" font-semibold">Availability & Price: </label>
        <div className="imagesContainer grid grid-cols-4">
          {newLaunch.availabilityPrice.map((imgURL, index) => (
            <div className="imageContainer">
              <img
                className="border-2 border-gray-500 w-64 h-44 object-cover object-center m-2"
                key={index}
                src={imgURL}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewLaunchDetailsPage;
