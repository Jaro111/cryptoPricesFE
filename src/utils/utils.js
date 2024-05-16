// map coin list main page
export const getRequest = async (start, limit) => {
  const res = await fetch("http://localhost:5000/getCoinData", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start: start,
      limit: limit,
    }),
  });
  const data = await res.json();
  const coinData = data.response;
  return coinData;
};
// Get coin list. To search suggestions
export const getCoinsIds = async () => {
  const res = await fetch("http://localhost:5000/getCoinIds");
  const cionIds = await res.json();
  const coinData = cionIds.response.data;
  //
  return coinData;
};

// Get coin by id

export const getSingleCoin = async (id) => {
  const res = await fetch("http://localhost:5000/getSingleCoin", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });
  const data = await res.json();
  const SingleCoinData = data.response;
  return SingleCoinData;
};
