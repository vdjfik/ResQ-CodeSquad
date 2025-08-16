const express = require("express");
const router = express.Router();

let pets = [
  { id: 1, name: "Buddy", type: "Dog", age: 2 },
  { id: 2, name: "Mittens", type: "Cat", age: 1 }
];

// ✅ READ all pets
router.get("/pets", (req, res) => {
  res.json(pets);
});

// ✅ CREATE new pet
router.post("/pets", (req, res) => {
  const newPet = { id: pets.length + 1, ...req.body };
  pets.push(newPet);
  res.json(newPet);
});

// ✅ UPDATE pet
router.put("/pets/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pets = pets.map(pet => (pet.id === id ? { ...pet, ...req.body } : pet));
  res.json(pets.find(p => p.id === id));
});

// ✅ DELETE pet
router.delete("/pets/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pets = pets.filter(pet => pet.id !== id);
  res.sendStatus(200);
});

module.exports = router;
