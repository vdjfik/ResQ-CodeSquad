const express = require('express');
const router = express.Router();
let pets = require('./data');

/**
 * @swagger
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       required:
 *         - name
 *         - type
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the pet
 *         name:
 *           type: string
 *           description: Pet's name
 *         type:
 *           type: string
 *           description: Type of pet (Dog, Cat, etc.)
 *         age:
 *           type: integer
 *           description: Pet's age
 */

/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: Add a new pet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       201:
 *         description: Pet created successfully
 */
router.post('/pets', (req, res) => {
  const newPet = req.body;
  newPet.id = pets.length + 1;
  pets.push(newPet);
  res.status(201).json(newPet);
});

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Get all pets
 *     responses:
 *       200:
 *         description: List of pets
 */
router.get('/pets', (req, res) => {
  res.json(pets);
});

/**
 * @swagger
 * /api/pets/{id}:
 *   get:
 *     summary: Get a pet by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pet found
 *       404:
 *         description: Pet not found
 */
router.get('/pets/:id', (req, res) => {
  const pet = pets.find(p => p.id == req.params.id);
  pet ? res.json(pet) : res.status(404).json({ message: 'Pet not found' });
});

/**
 * @swagger
 * /api/pets/{id}:
 *   put:
 *     summary: Update a pet by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       200:
 *         description: Pet updated successfully
 *       404:
 *         description: Pet not found
 */
router.put('/pets/:id', (req, res) => {
  const index = pets.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    pets[index] = { ...pets[index], ...req.body };
    res.json(pets[index]);
  } else {
    res.status(404).json({ message: 'Pet not found' });
  }
});

/**
 * @swagger
 * /api/pets/{id}:
 *   delete:
 *     summary: Delete a pet by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pet deleted successfully
 *       404:
 *         description: Pet not found
 */
router.delete('/pets/:id', (req, res) => {
  pets = pets.filter(p => p.id != req.params.id);
  res.status(204).send();
});

module.exports = router;