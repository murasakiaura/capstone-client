import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PetListingPage from "./pages/PetListingPage/PetListingPage";
import PetDetailPage from "./pages/PetDetailPage/PetDetailPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<PetListingPage />} />
        <Route path="/pet-detail/:id" element={<PetDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;