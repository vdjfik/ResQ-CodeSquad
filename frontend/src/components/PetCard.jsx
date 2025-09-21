// frontend/src/components/PetCard.jsx
export default function PetCard({ pet, onDelete, onEdit }) {
  return (
    <div className="pet-card">
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Pet Image (placeholder for now) */}
        <img
          src={`https://place-puppy.com/100x100`}
          alt={pet.name}
          style={{
            borderRadius: "12px",
            marginRight: "15px",
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />

        {/* Pet Info */}
        <div>
          <h3>{pet.name}</h3>
          <p>Type: {pet.type}</p>
          <p>Age: {pet.age}</p>

          {/* Buttons with classNames */}
          <button className="edit-btn" onClick={onEdit}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(pet.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
