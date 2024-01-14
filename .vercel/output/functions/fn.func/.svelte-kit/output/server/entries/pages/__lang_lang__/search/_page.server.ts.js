const load = async (event) => {
  const searchQuery = event.url.searchParams.get("search");
  const listings = await event.fetch(`/api/search?search=${searchQuery}`).then((res) => res.json());
  return {
    listings
  };
};
export {
  load
};
