import React from 'react';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';

export default function Home() {
  return (
    <div>
      <h1>Welcome to ResQ</h1>
      <PetForm />
      <PetCard />
    </div>
  );
}
