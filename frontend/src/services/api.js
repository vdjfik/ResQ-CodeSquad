const API_URL = 'http://localhost:5000/pets'; // match your backend server port

export const getPets = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createPet = async (pet) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pet),
  });
  return res.json();
};
