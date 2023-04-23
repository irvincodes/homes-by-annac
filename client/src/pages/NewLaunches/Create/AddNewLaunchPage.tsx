import React from "react";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import GalleryUpload from "./GalleryUpload";
import AvailabilityPriceUpload from "./AvailabilityPriceUpload";
import SiteFloorPlansUpload from "./SiteFloorPlansUpload";

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
    gallery: [] as string[],
    siteFloorPlans: [] as string[],
    availabilityPrice: [] as string[],
  });

  // const [files, setFiles] = useState({
  //   gallery: [] as File[],
  //   siteFloorPlans: [] as File[],
  //   availabilityPrice: [] as File[],
  // });
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [siteFloorPlanFiles, setSiteFloorPlanFiles] = useState<File[]>([]);
  const [availabilityPriceFiles, setAvailabilityPriceFiles] = useState<File[]>(
    []
  );

  // function handleFileChange(
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   inputType: string
  // ) {
  //   const fileList = event.target.files;
  //   if (fileList !== null) {
  //     const fileArray = Array.from(fileList);

  //     if (inputType === "gallery") {
  //       setGalleryFiles([...galleryFiles, ...fileArray]);
  //     } else if (inputType === "siteFloorPlans") {
  //       setSiteFloorPlanFiles([...siteFloorPlanFiles, ...fileArray]);
  //     } else if (inputType === "availabilityPrice") {
  //       setAvailabilityPriceFiles([...availabilityPriceFiles, ...fileArray]);
  //     }
  //   }
  //   console.log("fileList: ", fileList);
  //   console.log("galleryFiles: ", galleryFiles);
  //   console.log("siteFloorPlans: ", siteFloorPlanFiles);
  //   console.log("availabilityPrice: ", availabilityPriceFiles);
  // }

  // const handleUpload = async (files, endpoint) => {
  //   try {
  //     const formData = new FormData();
  //     files.forEach((file) => {
  //       formData.append("image", file);
  //     });

  //     const response = await fetch(endpoint, {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const navigate = useNavigate();

  const setGallery = (arrayS3URI: string[]) => {
    setNewLaunch((prevNewLaunch) => ({
      ...prevNewLaunch,
      gallery: arrayS3URI,
    }));
  };

  const setSiteFloorPlans = (fileObjKeys: string[]) => {
    setNewLaunch((prevNewLaunch) => ({
      ...prevNewLaunch,
      siteFloorPlans: fileObjKeys,
    }));
  };

  const setAvailabilityPrice = (fileObjKeys: string[]) => {
    setNewLaunch((prevNewLaunch) => ({
      ...prevNewLaunch,
      availabilityPrice: fileObjKeys,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit fired!");
    // const formData = new FormData();
    // formData.append("name", newLaunch.name);
    // formData.append("developer", newLaunch.developer);
    // formData.append("type", newLaunch.type);
    // formData.append("units", newLaunch.units);
    // formData.append("siteArea", newLaunch.siteArea);
    // formData.append("expTOP", newLaunch.expTOP);
    // formData.append("address", newLaunch.address);
    // formData.append("district", newLaunch.district);
    // formData.append("tenure", newLaunch.tenure);
    // formData.append("description", newLaunch.description);
    // formData.append("keyPoints", newLaunch.keyPoints);

    // galleryFiles.forEach((file) => {
    //   formData.append("gallery", file);
    // });

    // siteFloorPlanFiles.forEach((file) => {
    //   formData.append("siteFloorPlans", file);
    // });

    // availabilityPriceFiles.forEach((file) => {
    //   formData.append("availabilityPrice", file);
    // });

    // console.log("fromData: ", formData);

    // const createNewLaunch = async () => {
    //   console.log("CreateNewLaunch fired!");
    //   try {
    //     const response = await fetch("/api/newlaunches", {
    //       method: "POST",
    //       body: formData,
    //     });
    //     console.log("response: ", response);
    //     if (response.ok) {
    //       console.log("created new launch");
    //       navigate("/newlaunches");
    //     } else {
    //       console.log("unable to create New Launch!");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // createNewLaunch();
    // console.log("createNewLaunch() function executed");
    //==============

    const createNewLaunch = async () => {
      console.log("CreateNewLaunch fired!");
      const response = await fetch("/api/newlaunches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLaunch),
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

    //===========
    // const fileFormData = new FormData();
    // console.log("fileFormData: ", fileFormData);
    // for (let i = 0; i < file.gallery.length; i++) {
    //   fileFormData.append("gallery", files.gallery[i]);
    // }
    // for (let i = 0; i < files.gallery.length; i++) {
    //   fileFormData.append("siteFloorPlans", files.siteFloorPlans[i]);
    // }
    // for (let i = 0; i < files.gallery.length; i++) {
    //   fileFormData.append("siteFloorPlans", files.availabilityPrice[i]);
    // }

    // const createNewLaunch = async () => {
    //   console.log("CreateNewLaunch fired!");
    //   const textDataResponse = await fetch("/api/newlaunches", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newLaunch),
    //   });
    //   console.log("response: ", textDataResponse);
    //   const fileDataResponse = await fetch("/api/newlaunches", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     body: fileFormData,
    //   });
    //   if (textDataResponse.ok && fileDataResponse.ok) {
    //     console.log("created new launch");
    //     navigate("/newlaunches");
    //   } else {
    //     console.log("unable to create New Launch!");
    //   }
    // };
    // createNewLaunch();

    //==========

    // if (textDataResponse.ok) {
    //   console.log("created new launch");
    //   navigate("/newlaunches");
    // } else {
    //   console.log("unable to create New Launch!");
    // }

    // const createFileData = async () => {
    //   const fileDataResponse = await fetch("/api/newlaunches", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     body: fileFormData,
    //   });
    // };
    // if (textDataResponse.ok) {
    //   console.log("created new launch");
    //   navigate("/newlaunches");
    // } else {
    //   console.log("unable to create New Launch!");
    // }
  };

  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name } = event.target;
  //   const files = event.target.files;
  //   if (files) {
  //     setFiles((prevFiles) => ({
  //       ...prevFiles,
  //       [name]: Array.from(files),
  //     }));
  //   }
  //   // const { name, value } = event.target;
  //   // setFiles((prevFiles) => ({ ...prevFiles, [name]: value }));
  //   // setFiles(event.target.files);
  //   console.log("files: ", files);
  // };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if(files) {
  //   const formData = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     formData.append("images", files[i]);
  //   }
  //       setFiles(formData);
  // }

  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLaunch({ ...newLaunch, [event.target.name]: event.target.value });
  };

  // const handleGalleryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files) {
  //     let updatedGallery: File[] = [...newLaunch.gallery];
  //     for (let i = 0; i < files.length; i++) {
  //       updatedGallery.push(files[i]);
  //     }
  //     setNewLaunch({ ...newLaunch, gallery: updatedGallery });
  //   }
  // };

  // const handleSiteFloorPlansChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const files = event.target.files;
  //   if (files) {
  //     let updatedSiteFloorPlans: File[] = [...newLaunch.siteFloorPlans];
  //     for (let i = 0; i < files.length; i++) {
  //       updatedSiteFloorPlans.push(files[i]);
  //     }
  //     setNewLaunch({ ...newLaunch, siteFloorPlans: updatedSiteFloorPlans });
  //   }
  // };

  // const handleAvailabilityPriceChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const files = event.target.files;
  //   if (files) {
  //     let updatedAvailabilityPrice: File[] = [...newLaunch.availabilityPrice];
  //     for (let i = 0; i < files.length; i++) {
  //       updatedAvailabilityPrice.push(files[i]);
  //     }
  //     setNewLaunch({
  //       ...newLaunch,
  //       availabilityPrice: updatedAvailabilityPrice,
  //     });
  //   }
  // };

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
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewLaunchPage;
