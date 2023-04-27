import { NextFunction, Request, Response } from "express";
import express from "express";
import multer from "multer";
// const { s3Uploadv3 } = require("../utils/s3Service");
import { s3Upload } from "../utils/s3Service";

const app = express();

const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000000000, files: 10 },
}).array("file");

const uploadFile = async (req: Request, res: Response) => {
  console.log("uploadFile fired");
  try {
    const files = req.files as Express.Multer.File[];
    console.log("files: ", files);
    const fileObjects = files.map((file) => ({
      buffer: file.buffer,
      mimetype: file.mimetype,
      originalname: file.originalname,
    }));

    console.log("fileObjects: ", fileObjects);

    const results = await s3Upload(fileObjects);
    console.log("results: ", results);
    return res.json({ results });
  } catch (err) {
    console.log(err);
  }
};

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        message: "File is too large.",
      });
    }
    if (error.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({
        message: "File limit reached.",
      });
    }
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        message: "File must be an image.",
      });
    }
  }
});

const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  upload(req, res, (err) => {
    console.log("req.files:", req.files);
    console.log("err:", err);
    if (err) {
      return res.status(400).json({
        message: "File upload failed.",
      });
    }
    next();
  });
};

export default { uploadImage: [uploadMiddleware, uploadFile] };
