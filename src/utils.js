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
