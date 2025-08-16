export default function PetCard({ pet, onDelete }) {
    return (
      <div className="border p-4 rounded shadow mb-2">
        <h2 className="font-bold text-lg">{pet.name}</h2>
        <p>Type: {pet.type}</p>
        <p>Age: {pet.age}</p>
        <button
          onClick={() => onDelete(pet.id)}
          className="bg-red-500 text-white px-2 py-1 rounded mt-2"
        >
          Delete
        </button>
      </div>
    );
  }
  