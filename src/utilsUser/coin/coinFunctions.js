// add user coins
export const addCoinToPortfolio = async (coinId, PortfolioId) => {
  const res = await fetch("http://localhost:5000/coin/addCoin", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      coinId: coinId,
      PortfolioId: PortfolioId,
    }),
  });

  const data = await res.json();
  return data;
};

// getUserCoins

export const getCoins = async (PortfolioId) => {
  const res = await fetch("http://localhost:5000/coin/getCoins", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
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

// update Coin Buy Details

export const updateBuyDetails = async (
  buyPrice,
  qty,
  UserId,
  PortfolioId,
  coinId
) => {
  const res = await fetch("http://localhost:5000/coin/updateBuyDetails", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      buyPrice: buyPrice,
      qty: qty,
      UserId: UserId,
      PortfolioId: PortfolioId,
      coinId: coinId,
    }),
  });

  const data = await res.json();
  return data;
};
