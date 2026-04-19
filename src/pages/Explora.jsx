import { Navbar, Footer } from "../components";
import ExploraLanding from "./ExploraLanding";

function Explora() {
  return (
    <div className="explora-page min-h-screen bg-black">
      <div className="explora-navbar">
        <Navbar />
      </div>
      <ExploraLanding /> {/* ← replaced ExploraAnimation */}
      <Footer />
    </div>
  );
}

export default Explora;