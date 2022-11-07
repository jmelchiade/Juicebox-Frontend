export async function registerUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  const response = await fetch(
    "https://pure-harbor-71055.herokuapp.com/api/users/register",
    options
  );
  const result = await response.json();
  return result.data;
}

export async function loginUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  const response = await fetch(
    "https://pure-harbor-71055.herokuapp.com/api/users/login",
    options
  );
  const result = await response.json();
  return result.data;
}
