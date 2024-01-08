import { l as listings } from "../../../../chunks/mongo.js";
async function searchListings({ query }) {
  const pipeline = [
    {
      $search: {
        index: "searchListings",
        text: {
          query,
          path: {
            wildcard: "*"
          }
        }
      }
    },
    {
      $limit: 10
    },
    {
      $project: {
        id: 1,
        title: 1,
        price: 1,
        basic_info: { name: 1 }
      }
    }
  ];
  const data = await listings.aggregate(pipeline).toArray();
  return data;
}
const GET = async ({ url }) => {
  const page = Number(url.searchParams.get("page") ?? "1");
  const query = url.searchParams.get("search") ?? "";
  if (isNaN(page)) {
    return new Response(JSON.stringify({ error: "Invalid page number" }), { status: 400 });
  }
  const data = await searchListings({ page, query });
  return new Response(JSON.stringify(data));
};
export {
  GET
};
