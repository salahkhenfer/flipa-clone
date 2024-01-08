import { j as json } from "../../../../chunks/index.js";
const GET = async ({ url, locals: { LL } }) => {
  const oldSpectators = Number(url.searchParams.get("oldSpectators") ?? "0");
  let spectators = oldSpectators * 2 + 1;
  if (spectators > 1e5) {
    spectators = 0;
  }
  console.info(LL.log({ fileName: "api/+server.ts" }));
  return json({ spectators });
};
export {
  GET
};
