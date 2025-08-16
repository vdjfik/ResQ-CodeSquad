import { useEffect, useState } from "react";
import PetForm from "./PetForm";
import PetCard from "./PetCard";

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);

  // ✅ READ pets from backend
  useEffect(() => {
    fetch("http://localhost:3000/api/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // ✅ CREATE
  const addPet = (pet) => {
    fetch("http://localhost:3000/api/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet),
    })
      .then((res) => res.json())
      .then((data) => setPets([...pets, data]))
      .catch((err) => console.error(err));
  };

  // ✅ UPDATE
  const updatePet = (pet) => {
    fetch(`http://localhost:3000/api/pets/${pet.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet),
    })
      .then((res) => res.json())
      .then((updated) => {
        setPets(pets.map((p) => (p.id === updated.id ? updated : p)));
        setEditingPet(null);
      })
      .catch((err) => console.error(err));
  };

  // ✅ DELETE
  const deletePet = (id) => {
    fetch(`http://localhost:3000/api/pets/${id}`, { method: "DELETE" })
      .then(() => setPets(pets.filter((p) => p.id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <PetForm onAdd={addPet} onUpdate={updatePet} editingPet={editingPet} />

      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          onDelete={deletePet}
          onEdit={() => setEditingPet(pet)}
        />
      ))}
    </div>
  );
}

