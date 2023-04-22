// import React from "react";

// const GalleryUpload = ({ onUpload }) => {
//   const handleChange = (event) => {
//     const files = event.target.files;
//     onUpload(files, "/gallery");
//   };

//   return (
//     <div>
//       <label htmlFor="gallery-upload">Upload Images for Gallery</label>
//       <input type="file" id="gallery-upload" onChange={handleChange} multiple />
//     </div>
//   );
// };

// export default GalleryUpload;

import React, { useState } from "react";

interface GalleryUploadProps {
  onUpload: (fileObjKeys: string[]) => void;
}

const GalleryUpload: React.FC<GalleryUploadProps> = ({ onUpload }) => {
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
      const res = await fetch("/api/newlaunches/gallery", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("data: ", data);
      console.log("typeof data: ", typeof { data });
      const { results } = data;
      const fileObjKeys = results.map((result: { key: String }) => result.key);
      onUpload(fileObjKeys);
    } catch (err) {
      console.log(err);
    }

    setFiles(Array.from(selectedFiles));
  };

  return (
    <div>
      <label htmlFor="gallery">Gallery: </label>
      <br />
      <input
        type="file"
        name="file"
        id="gallery"
        onChange={handleChange}
        multiple
      />
    </div>
  );
};

export default GalleryUpload;
