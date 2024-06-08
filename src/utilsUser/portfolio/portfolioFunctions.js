// add portfolio

export const addPortfolio = async (UserId) => {
  const res = await fetch("http://localhost:5000/user/addPortfolio", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      UserId: UserId,
    }),
  });

  const data = await res.json();
  return data;
};

//get portfolios

export const getPortfolio = async (UserId) => {
  const res = await fetch("http://localhost:5000/user/getPortfolio", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      UserId: UserId,
    }),
  });

  const data = await res.json();
  const userData = data.portfolios;
  return userData;
};

// update portfolio name

export const renamePortfolio = async (title, UserId, id) => {
  const res = await fetch("http://localhost:5000/user/updatePortfolioName", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      UserId: UserId,
      id: id,
    }),
  });

  const data = await res.json();

  return data;
};

// delete portfolio

export const deletePortfolio = async (UserId, PortfolioId) => {
  const res = await fetch("http://localhost:5000/user/deletePortfolio", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      PortfolioId: PortfolioId,
      UserId: UserId,
    }),
  });

  const data = await res.json();
  return data;
};
