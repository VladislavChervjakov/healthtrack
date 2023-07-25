const API_URL = "http://localhost:8000/v1";

/** Login request */
async function httpLogin(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  return await response.json();
}

export { httpLogin };
