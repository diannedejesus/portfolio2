import { useState } from "react";
import WorkPreview from "./components/WorkPreview";
import "./components/custom.css";
import Navigation from "./components/Navigation";
import HeroImage from "./components/HeroImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showWork, setShowWork] = useState("");

  return (
    <header>
      <Navigation />

      <div className="mt-3 mt-sm-5 px-4 px-sm-5 bg-image">
        <div className="col-md-7">
          <HeroImage />
        </div>

        <div className="mt-5 mt-lg-5 col-lg-7 col-md-9">
          <h3 className="text-start mb-3 fs-4">Latest Works</h3>
          <div className="row g-1 g-sm-4 row-cols-2 row-cols-sm-3">
            <WorkPreview
              imageSource="rent-calculator.gif"
              linkSource={() =>
                showWork === "first" ? setShowWork("") : setShowWork("first")
              }
              imageAlt="Partial image of the main window for the rent estimator application"
              title="Rent Estimator"
              link=""
            />

            <WorkPreview
              imageSource="debts-table.png"
              linkSource={() =>
                showWork === "second" ? setShowWork("") : setShowWork("second")
              }
              imageAlt=""
              title="Debt Manager"
              link="https://github.com/diannedejesus/debt_tracker"
            />

            <WorkPreview
              imageSource="user-admin.png"
              linkSource={() =>
                showWork === "third" ? setShowWork("") : setShowWork("third")
              }
              imageAlt=""
              hiddenOption="d-none d-sm-block"
              title="Project"
              link=""
            />
          </div>
          <div className="row g-0 mb-4 row-cols-3 title-color fs-2 text-center">
            <div>
              {showWork === "first" && <FontAwesomeIcon icon={faAnglesUp} />}
            </div>
            <div>
              {showWork === "second" && <FontAwesomeIcon icon={faAnglesUp} />}
            </div>
            <div>
              {showWork === "third" && <FontAwesomeIcon icon={faAnglesUp} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
