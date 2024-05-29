// add user coins
export const addCoinToPortfolio = async (coinId, UserId, PortfolioId) => {
  const res = await fetch("http://localhost:5000/coin/addCoin", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      coinId: coinId,
      UserId: UserId,
      PortfolioId: PortfolioId,
    }),
  });

  const data = await res.json();
  return data;
};

// getUserCoins

export const getCoins = async (UserId, PortfolioId) => {
  const res = await fetch("http://localhost:5000/coin/getCoins", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      UserId: UserId,
      PortfolioId: PortfolioId,
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
