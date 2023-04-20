// const { S3 } = require("aws-sdk");
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

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
      Key: `uploads/${file.originalname}`,
      Body: file.buffer,
    };
  });

  return await Promise.all(
    params.map((param: any) => s3client.send(new PutObjectCommand(param)))
  );
}
