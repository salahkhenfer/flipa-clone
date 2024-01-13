import { s as start_mongo } from "./mongo.js";
import { s as sourceLanguageTag } from "./runtime.js";
start_mongo().then(() => {
  console.log("Mongo started");
}).catch((err) => {
  console.error("Mongo failed to start", err);
});
async function handle({ event, resolve }) {
  const lang = event.params.lang ?? sourceLanguageTag;
  return await resolve(event, {
    transformPageChunk({ done, html }) {
      if (done) {
        return html.replace("%lang%", lang);
      }
    }
  });
}
export {
  handle
};
