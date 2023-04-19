import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL as string);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}: ${db.port}`);
});
