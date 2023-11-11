import { useState } from "react";
import WorkPreview from "./components/WorkPreview";
import "./components/custom.css";
import Navigation from "./components/Navigation";
import HeroImage from "./components/HeroImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showWork, setShowWork] = useState("");

  return (
    <header>
      <Navigation />

      <div className="mt-3 mt-sm-5 px-4 px-sm-5 bg-image">
        <div className="col-lg-7 col-md-9">
          <HeroImage />
        </div>

        <div className="mt-4 mt-lg-5 col-lg-7 col-md-9">
          <h3 className="text-start mb-3 fs-3">Latest Works</h3>
          <div className="row g-1 g-sm-4 row-cols-2 row-cols-sm-3">
            <WorkPreview
              imageSource="rent-calculator.gif"
              linkSource={() =>
                showWork === "first" ? setShowWork("") : setShowWork("first")
              }
              imageAlt="Partial image of the main window for the rent estimator application"
            />

            <WorkPreview
              imageSource="debts-table.png"
              linkSource={() =>
                showWork === "second" ? setShowWork("") : setShowWork("second")
              }
              imageAlt=""
            />

            <WorkPreview
              imageSource="rentcalc-pdf.png"
              linkSource={() =>
                showWork === "third" ? setShowWork("") : setShowWork("third")
              }
              imageAlt=""
              hiddenOption="d-none d-sm-block"
            />
          </div>
          <div className="row g-0 mb-4 row-cols-3 title-color fs-2 text-center">
            <div>
              {showWork === "first" && <FontAwesomeIcon icon={faAnglesDown} />}
            </div>
            <div>
              {showWork === "second" && <FontAwesomeIcon icon={faAnglesDown} />}
            </div>
            <div>
              {showWork === "third" && <FontAwesomeIcon icon={faAnglesDown} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
