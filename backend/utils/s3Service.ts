// const { S3 } = require("aws-sdk");
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const uuid = uuidv4();

// exports.s3Uploadv2 = async (files) => {
//   const s3 = new S3();

//   const params = files.map((file) => {
//     return {
//       Bucket: process.env.AWS_BUCKET_NAME,
//       Key: `uploads/${file.originalname}`,
//       Body: file.buffer,
//     }
//   })

//   return await Promise.all(params.map((param) => s3.upload(param).promise()))
// }

interface FileObject {
  originalname: string;
  buffer: Buffer;
}

export async function s3Upload(files: FileObject[]): Promise<any> {
  const s3client = new S3Client({});

  const params = files.map((file) => {
    return {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `uploads/${uuid}-${file.originalname}`,
      Body: file.buffer,
    };
  });

  const uploadResponses = await Promise.all(
    params.map((param) =>
      s3client.send(new PutObjectCommand(param)).then((response) => ({
        key: param.Key,
        ETag: response.ETag,
      }))
    )
  );

  return uploadResponses;
}
