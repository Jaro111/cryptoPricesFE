export const getRequest = async () => {
  const res = await fetch("http://localhost:5000/getCoinData", {
    method: "post",
  });
  const data = await res.json();
  const coinData = data.response;
  console.log(coinData);
  return coinData;
};
