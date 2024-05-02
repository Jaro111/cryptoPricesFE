export const getRequest = async () => {
  const res = await fetch("http://localhost:5000/getCoinData");
  const data = await res.json();
  const coinData = data.response.data;
  return coinData;
};
