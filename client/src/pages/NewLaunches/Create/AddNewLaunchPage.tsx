import React from "react";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import GalleryUpload from "./GalleryUpload";
import AvailabilityPriceUpload from "./AvailabilityPriceUpload";
import SiteFloorPlansUpload from "./SiteFloorPlansUpload";
import DropdownSelect from "./DropdownSelect";

const typeTypes = [
  "Residential Highrise",
  "Residential Lowrise",
  "Executive Condominium",
  "Mixed Development",
  "Residential Landed",
];

const districtTypes = [
  "D01 - Raffles Place, Cecil, Marina, People's Park",
  "D02 -  Anson, Tanjong Pagar",
  "D03 - Queenstown, Tiong Bahru",
  "D04 - Telok Blangah, Harbourfront",
  "D05 - Pasir Panjang, Clementi New Town",
  "D06 - City Hall, High Street, North Bridge Road",
  "D07 - Beach Road, Bencoolen Road, Bugis, Rochor",
  "D08 - Little India, Farrer Park, Serangoon Road",
  "D09 - Orchard, Cairnhill, River Valley",
  "D10 - Bukit Timah, Holland Road, Tanglin, Grange",
  "D11 - Novena, Thomson, Newton, Dunearn",
  "D12 - Balestier, Toa Payoh, Serangoon",
  "D13 - Macpherson, Braddell, Potong Pasir",
  "D14 - Eunos, Geylang, Kembangan, Paya Lebar",
  "D15 - Katong, Joo Chiat, Amber Road",
  "D16 - Bedok, Upper East Coast, Eastwood, Kew Drive",
  "D17 - Changi, Loyang, Pasir Ris",
  "D18 - Tampines, Pasir Ris",
  "D19 - Serangoon Garden, Hougang, Punggol",
  "D20 - Bishan, Ang Mo Kio",
  "D21 - Upper Bukit Timah, Clementi Park, Ulu Pandan",
  "D22 - Boon Lay, Jurong, Tuas",
  "D23 - Hillview, Bukit Panjang, Choa Chu Kang",
  "D24 - Lim Chu Kang, Tengah",
  "D25 - Kranji, Woodgrove",
  "D26 - Upper Thomson, Springleaf",
  "D27 - Yishun, Sembawang",
  "D28 - Seletar",
];

const tenureTypes = ["99 Years", "Freehold", "999 Years", "Others"];

interface User {
  accountType?: string;
  name?: string;
  password?: string;
  _id?: string;
}

interface AddNewLaunchPageProps {
  user: User;
}

function AddNewLaunchPage(props: AddNewLaunchPageProps) {
  const [newLaunch, setNewLaunch] = useState({
    name: "",
    developer: "",
    type: "",
    units: "",
    expTOP: "",
    address: "",
    district: "",
    tenure: "",
    description: "",
    gallery: [] as string[],
    siteFloorPlans: [] as string[],
    availabilityPrice: [] as string[],
  });

  const navigate = useNavigate();

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit fired!");

    const createNewLaunch = async () => {
      console.log("CreateNewLaunch fired!");
      const token = localStorage.getItem("token");
      const id = props.user._id;
      console.log("Admin's id: ", id);
      const newLaunchData = { newLaunch, adminId: id };
      const response = await fetch("/api/newlaunches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify(newLaunchData),
      });
      console.log("response: ", response);
      if (response.ok) {
        console.log("created new launch");
        navigate("/newlaunches");
      } else {
        console.log("unable to create New Launch!");
      }
    };
    createNewLaunch();
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
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
            <DropdownSelect
              options={typeTypes}
              value={newLaunch.type}
              onChange={handleChange}
              name="type"
            />

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
            <DropdownSelect
              options={districtTypes}
              value={newLaunch.district}
              onChange={handleChange}
              name="district"
            />

            <br />
            <label className=" font-semibold">Tenure: </label>
            <DropdownSelect
              options={tenureTypes}
              value={newLaunch.tenure}
              onChange={handleChange}
              name="tenure"
            />

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

            <GalleryUpload onUpload={setGallery} />

            <br />
            <SiteFloorPlansUpload onUpload={setSiteFloorPlans} />

            <br />
            <AvailabilityPriceUpload onUpload={setAvailabilityPrice} />

            <br />
            <div className="flex justify-center">
              <button className=" bg-teal-200 py-2 px-4 border-2 mt-2 w-40 border-cyan-950 rounded-md font-semibold">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewLaunchPage;
