const BACKEND_URI = "http://localhost:5000/api";

export async function addLeave({ userId, leaveReason, durationLeave, durationType, typeLeave, leavePenalty }) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BACKEND_URI}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    body: JSON.stringify({ userId, leaveReason, durationLeave, durationType, typeLeave, leavePenalty}),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to add leave');
  }
  return response.json();
}

