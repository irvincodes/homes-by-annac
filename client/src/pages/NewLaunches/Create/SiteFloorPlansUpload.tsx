// import React from "react";

// const SiteFloorPlansUpload = ({ onUpload }) => {
//   const handleChange = (event) => {
//     const files = event.target.files;
//     onUpload(files, "/sitefloorplans");
//   };

//   return (
//     <div>
//       <label htmlFor="sitefloorplans-upload">Upload Site Floor Plans</label>
//       <input
//         type="file"
//         id="sitefloorplans-upload"
//         onChange={handleChange}
//         multiple
//       />
//     </div>
//   );
// };

// export default SiteFloorPlansUpload;

import React, { useState } from "react";

interface SiteFloorPlansUploadProps {
  onUpload: (fileObjKeys: string[]) => void;
}

const SiteFloorPlansUpload: React.FC<SiteFloorPlansUploadProps> = ({
  onUpload,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    console.log("selectedFiles: ", selectedFiles);
    if (!selectedFiles) return;

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("file", selectedFiles[i]);
    }
    // Array.from(selectedFiles).forEach((file) => formData.append("file", file));
    console.log("formData: ", formData.entries());
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(`${key}: ${value.name}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/newlaunches/sitefloorplans", {
        method: "POST",
        headers: {
          Authorization: `bearer ${token}`,
        },

        body: formData,
      });
      const data = await res.json();
      console.log("data: ", data);
      console.log("typeof data: ", typeof { data });
      const { results } = data;
      const fileObjKeys = results.map((result: { key: String }) => result.key);
      const halfS3URI: string =
        "https://aws-s3-p4-property-upload.s3.ap-southeast-1.amazonaws.com/";
      const arrayS3URI = fileObjKeys.map((key: string) => {
        return `${halfS3URI}${key}`;
      });
      console.log("arrayS3URI: ", arrayS3URI);
      onUpload(arrayS3URI);
    } catch (err) {
      console.log(err);
    }

    setFiles(Array.from(selectedFiles));
  };

  return (
    <div>
      <label htmlFor="gallery">Site/Floor Plans: </label>
      <br />
      <input
        type="file"
        name="file"
        id="siteFloorPlans"
        onChange={handleChange}
        multiple
      />
    </div>
  );
};

export default SiteFloorPlansUpload;
