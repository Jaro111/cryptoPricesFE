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
  return data;
};
