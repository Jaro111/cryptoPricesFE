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
  let data = await res.json();

  return data;
};

// updat coin details

export const updateCoinDetails = async (coinId, PortfolioId, buyPrice, qty) => {
  const res = await fetch("http://localhost:5000/buyDetails/updateBuyDetails", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      coinId: coinId,
      PortfolioId: PortfolioId,
      buyPrice: buyPrice,
      qty: qty,
    }),
  });

  const data = await res.json();
  console.log(data);
  return data;
};
