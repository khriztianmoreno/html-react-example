const BASE_URL = 'http://localhost:8080/api';

export async function getCandidates() {
  const response = await fetch(`${BASE_URL}/candidates`);
  const data = await response.json();
  return data;
}

export async function createApplicant(applicant) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(applicant),
  };
  const response = await fetch(`${BASE_URL}/applicants`, options);
  return response.json();
}
