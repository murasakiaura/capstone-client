import React, { useEffect, useState } from "react";
import "./PetDetailPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const PetDetailPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/petrescue/listings/${id}`
        );
        setPet(response.data);
      } catch (error) {
        console.error("Error fetching pet details:", error);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (!pet) return <div>Work in Progress - Stay Tuned!</div>;

  return (
    <div className="detail-container">
      <img src={`http://localhost:5000${pet.image_path}`} alt={pet.name} />
      <p>Species: {pet.species}</p>
      <p>Breed: {pet.breeds_display}</p>
      <p>Location: {pet.state}</p>
      <p>Adoption Fee: {pet.adoption_fee}</p>
      <p>{pet.personality}</p>
    </div>
  );
};

export default PetDetailPage;
