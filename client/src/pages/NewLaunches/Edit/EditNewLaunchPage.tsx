import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryUpload from "../Create/GalleryUpload";
import SiteFloorPlansUpload from "../Create/SiteFloorPlansUpload";
import AvailabilityPriceUpload from "../Create/AvailabilityPriceUpload";
import DropdownSelect from "../Create/DropdownSelect";

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

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
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

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/newlaunches/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(newLaunch),
    });
    navigate(`/newlaunches/${id}`);
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" flex justify-center font-bold my-6">
        <h1 className=" text-xl">Edit New Launch Details</h1>
      </div>
      <br />
      <div className="flex justify-center">
        <button
          onClick={handleUpdate}
          className=" bg-pink-200 hover:bg-pink-400 py-2 px-4 border-2 mt-2 w-40 border-cyan-950 rounded-md font-semibold"
        >
          Update Details
        </button>
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
      <DropdownSelect
        options={typeTypes}
        value={newLaunch.type}
        onChange={handleChange}
        name="type"
      />
      {/* <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="type"
        value={newLaunch.type}
        onChange={handleChange}
      ></input> */}
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
      {/* <label className=" font-semibold">Site Area: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="siteArea"
        value={newLaunch.siteArea}
        onChange={handleChange}
      ></input>
      <br /> */}
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
      <DropdownSelect
        options={districtTypes}
        value={newLaunch.district}
        onChange={handleChange}
        name="district"
      />
      {/* <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="district"
        value={newLaunch.district}
        onChange={handleChange}
      ></input> */}
      <br />
      <label className=" font-semibold">Tenure: </label>
      <br />
      <DropdownSelect
        options={tenureTypes}
        value={newLaunch.tenure}
        onChange={handleChange}
        name="tenure"
      />
      {/* <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="tenure"
        value={newLaunch.tenure}
        onChange={handleChange}
      ></input> */}
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
      {/* <label className=" font-semibold">Key Points: </label>
      <br />
      <input
        className="mb-4 w-96 bg-gray-200 p-2"
        name="keyPoints"
        value={newLaunch.keyPoints}
        onChange={handleChange}
      ></input>
      <br /> */}
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
      {/* <button className=" bg-teal-200 py-2 px-4 border-2 border-cyan-950 rounded-md font-semibold">
        SUBMIT
      </button> */}
    </div>
  );
}

export default EditNewLaunchPage;
