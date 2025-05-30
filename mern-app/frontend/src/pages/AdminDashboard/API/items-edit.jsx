const BACKEND_URI = "http://localhost:5000/api";

export async function editEmployee({ _id, name, email, password, phone, isAdmin, role, initialBalance }) {
  const token = localStorage.getItem('token');
  const url = `${BACKEND_URI}/users/?id=${_id}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    body: JSON.stringify({ name, email, password, phone, isAdmin, role, initialBalance }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to edit employee');
  }
  return response.json();
}

