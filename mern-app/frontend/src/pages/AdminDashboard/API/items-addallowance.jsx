const BACKEND_URI = "http://localhost:5000/api";

export async function addAllowance({ userId, employeesAllowanceAmount, employeesAllowanceReason, employeesExtra}) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BACKEND_URI}/employee-allowance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    body: JSON.stringify({ userId, employeesAllowanceAmount, employeesAllowanceReason, employeesExtra}),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to add employee');
  }
  return response.json();
}

