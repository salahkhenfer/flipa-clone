import { l as listings } from "../../../../chunks/mongo.js";
const load = async ({ params }) => {
  const { id } = params;
  const listing = await listings.findOne({ id }) || null;
  return {
    listing: listing ? { ...listing, _id: listing._id.toString() } : null
  };
};
export {
  load
};
