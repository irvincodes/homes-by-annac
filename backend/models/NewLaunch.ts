import mongoose from "mongoose";
const { Schema } = mongoose;

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
  "D05 - Pasir Panjang, Hong Leong Garden, Clementi New Town",
  "D06 - City Hall, High Street, North Bridge Road",
  "D07 - Beach Road, Bencoolen Road, Bugis, Rochor",
  "D08 - Little India, Farrer Park, Serangoon Road",
  "D09 - Orchard, Cairnhill, River Valley",
  "D10 - Ardmore, Bukit Timah, Holland Road, Tanglin, Grange",
  "D11 - Watten Estate, Novena, Thomson, Newton, Dunearn",
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
  "D23 - Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang",
  "D24 - Lim Chu Kang, Tengah",
  "D25 - Kranji, Woodgrove",
  "D26 - Upper Thomson, Springleaf",
  "D27 - Yishun, Sembawang",
  "D28 - Seletar",
];

const tenureTypes = ["99 Years", "Freehold", "999 Years", "Others"];

const newLaunchSchema = new Schema(
  {
    name: { type: String, required: true },
    developer: { type: String, required: true },
    type: { type: String, enum: typeTypes, required: true },
    units: { type: Number, required: true },
    siteArea: { type: String, required: true },
    expTOP: { type: String, required: true },
    address: { type: String, required: true },
    district: { type: String, enum: districtTypes, required: true },
    tenure: { type: String, enum: tenureTypes, required: true },
    description: { type: String, required: true },
    keyPoints: { type: String, required: true },
    gallery: { type: String, required: true },
    siteFloorPlans: { type: String, required: true },
    availabilityPrice: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("NewLaunch", newLaunchSchema);
