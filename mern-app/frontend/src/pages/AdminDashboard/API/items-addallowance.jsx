const BACKEND_URI = "http://localhost:5000/api";

export async function addAllowance({ user, employeesAllowanceAmount, employeesAllowanceReason, employeesExtra, employeesforLead}) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BACKEND_URI}/employee-allowance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    body: JSON.stringify({ user, employeesAllowanceAmount, employeesAllowanceReason, employeesExtra, employeesforLead}),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to add employee');
  }
  return response.json();
}

