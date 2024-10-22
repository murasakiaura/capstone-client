import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PetListingPage.scss";

const PetListingsPage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/petrescue/listings"
        );
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pet listings:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="listings-container">
      {pets.map((pet) => (
        <div key={pet.id} className="pet-card">
          <img src={`http://localhost:5000${pet.image_path}`} alt={pet.name} />
          <p>Type: {pet.type}</p>
          <p>Species: {pet.species}</p>
          <p>Breed: {pet.breed}</p>
          <p>Age: {pet.age}</p>
          <p>Location: {pet.location}</p>
          <Link to={`/pet/${pet.id}`} className="detail-link">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PetListingsPage;
