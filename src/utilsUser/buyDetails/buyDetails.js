// add BUy Details
export const addaBUyDetails = async (coinId, PortfolioId, buyPrice, qty) => {
  const res = await fetch("http://localhost:5000/buyDetails/addDetails", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      coinId: coinId,
      buyPrice: buyPrice,
      qty: qty,
      PortfolioId: PortfolioId,
    }),
  });

  const data = res.json();
  return data;
};

// get Buy Details

export const getBuyDetails = async (PortfolioId) => {
  const res = await fetch("http://localhost:5000/buyDetails/getBuyDetails", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      PortfolioId: PortfolioId,
    }),
  });

  const data = res.json();
  return data;
};

// delete Buy details and Coin
export const deleteBuyDetails = async (PortfolioId, coinId) => {
  const res = await fetch("http://localhost:5000/buyDetails/deleteBuyDetails", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      PortfolioId: PortfolioId,
      coinId: coinId,
    }),
  });

  const data = res.json();
  return data;
};
