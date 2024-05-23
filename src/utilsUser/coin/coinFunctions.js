// add user coins
export const addCoinToPortfolio = async (coinId, UserId) => {
  const res = await fetch("http://localhost:5000/coin/addCoin", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      coinId: coinId,
      UserId: UserId,
    }),
  });

  const data = await res.json();
  return data;
};

// getUserCoins

export const getCoins = async (UserId) => {
  const res = await fetch("http://localhost:5000/coin/getCoins", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      UserId: UserId,
    }),
  });
  let idArray = [];
  const data = await res.json();
  const dataArray = data.coins;
  for (let i = 0; i < dataArray.length; i++) {
    idArray.push(dataArray[i].coinId);
  }
  const idString = idArray.join(",");
  return idString;
};
