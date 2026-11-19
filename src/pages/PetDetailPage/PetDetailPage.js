import React, { useEffect, useState } from "react";
import "./PetDetailPage.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const PetDetailPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    const fetchPetDetails = async () => {
      setPet(null);
      setStatus("loading");

      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/petrescue/pet/${encodeURIComponent(id)}`,
          { signal: controller.signal }
        );
        setPet(response.data);
        setStatus("success");
      } catch (error) {
        if (controller.signal.aborted) return;
        setStatus(error.response?.status === 404 ? "not-found" : "error");
      }
    };

    fetchPetDetails();
    return () => controller.abort();
  }, [id]);

  if (status === "loading") {
    return <main className="detail-container" role="status">Loading animal details...</main>;
  }

  if (status === "not-found") {
    return (
      <main className="detail-container">
        <h2>Animal not found</h2>
        <p>This listing may no longer be available.</p>
        <Link to="/listings">Back to animals</Link>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="detail-container" role="alert">
        <h2>We couldn't load this animal</h2>
        <p>Please try again later.</p>
        <Link to="/listings">Back to animals</Link>
      </main>
    );
  }

  return (
    <main className="detail-container">
      {pet.image_path && (
        <img src={`${API_BASE_URL}${pet.image_path}`} alt={pet.name || pet.species || "Animal"} />
      )}
      <h2>{pet.name || pet.species}</h2>
      <p>Species: {pet.species}</p>
      <p>Breed: {pet.breed || "Not specified"}</p>
      <p>Location: {pet.location || "Not specified"}</p>
      {pet.adoption_fee != null && <p>Adoption Fee: {pet.adoption_fee}</p>}
      {pet.personality && <p>{pet.personality}</p>}
      <Link to="/listings">Back to animals</Link>
    </main>
  );
};

export default PetDetailPage;
