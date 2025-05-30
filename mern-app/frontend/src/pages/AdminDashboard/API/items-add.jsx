const BACKEND_URI = "http://localhost:5000/api";

export async function addEmployee({ name, email, password, phone, isAdmin, role, initialBalance }) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BACKEND_URI}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    body: JSON.stringify({ name, email, password, phone, isAdmin, role, initialBalance }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to add employee');
  }
  return response.json();
}

