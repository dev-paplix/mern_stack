const BACKEND_URI = "http://localhost:5000/api";

export async function addEquipment({ user, equipmentName, quantity, reason, urgency, equipmentPrice }) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BACKEND_URI}/employee-equipments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    body: JSON.stringify({ user, equipmentName, quantity, reason, urgency, equipmentPrice }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to add equipment');
  }
  return response.json();
}

