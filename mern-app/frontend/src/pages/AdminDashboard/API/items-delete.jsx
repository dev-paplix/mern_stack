const BACKEND_URI = "http://localhost:5000/api";

export async function deleteEmployee({ _id }) {
  const token = localStorage.getItem('token');
  const url = `${BACKEND_URI}/users/?id=${_id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },

  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to delete employee');
  }
  return response.json();
}

