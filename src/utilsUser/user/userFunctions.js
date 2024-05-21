// signUp
export const signUp = async (username, email, password) => {
  const res = await fetch("http://localhost:5000/user/signUp", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  const userData = data.user;
  return userData;
};

// logIn

export const logIn = async (username, password) => {
  const res = await fetch("http://localhost:5000/user/logIn", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const data = await res.json();
  const userData = data.user;
  return userData;
};
