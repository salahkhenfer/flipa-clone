import { l as listings } from "../../../../chunks/mongo.js";
const NO_OF_RESULTS_PER_PAGE = 10;
async function getListings({ page }) {
  const data = await listings.find({}, { limit: NO_OF_RESULTS_PER_PAGE, skip: (page - 1) * NO_OF_RESULTS_PER_PAGE }).toArray();
  const serilizedData = data.map((result) => ({ ...result, _id: result._id.toString() }));
  return serilizedData;
}
const GET = async ({ url }) => {
  const page = Number(url.searchParams.get("page") ?? "1");
  if (isNaN(page)) {
    return new Response(JSON.stringify({ error: "Invalid page number" }), { status: 400 });
  }
  const data = await getListings({ page });
  return new Response(JSON.stringify(data));
};
export {
  GET
};
