import { useState } from 'react';

export default function PetForm({ onAdd }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, type, age });
    setName('');
    setType('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1 mr-2"
        required
      />
      <input
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-1 mr-2"
        required
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-1 mr-2"
        required
      />
      <button className="bg-blue-500 text-white px-2 py-1 rounded">Add Pet</button>
    </form>
  );
}