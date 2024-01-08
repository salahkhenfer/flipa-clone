import { MongoClient, ServerApiVersion } from "mongodb";
const MONGO_URI = "mongodb+srv://admin:Njp475U4675UjHig@cluster0.w9c4c1b.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true
  }
});
async function start_mongo() {
  console.log("Starting mongo...");
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
}
const flippa_app_db = client.db("flippa-app");
const listings = flippa_app_db.collection("listings");
export {
  listings as l,
  start_mongo as s
};
