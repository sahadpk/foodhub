export function filterData(allRestaurants,searchInput) {
    const filterData = allRestaurants.filter((restaurent) =>
      restaurent?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
  }