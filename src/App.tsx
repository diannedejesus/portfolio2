import { useState } from "react";
import WorkPreview from "./components/WorkPreview";
import "./components/custom.css";
import Navigation from "./components/Navigation";
import HeroImage from "./components/HeroImage";
import WorkShowcase from "./components/WorkShowcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

type Showcases = {
  topLeftImg: { src: string; alt: string };
  topRightImg: { src: string; alt: string };
  bottomLeftImg: { src: string; alt: string };
  bottomRightImg: { src: string; alt: string };
};

function App() {
  const [showWork, setShowWork] = useState("");

  return (
    <div>
      <header>
        <Navigation />
        <div className="p-3 p-sm-5 bg-image gap-5 align-items-center">
          <div className="col-lg-7 col-md-9">
            <HeroImage />
            <div className="mt-5">
              <h3 className="text-start mb-3 fs-2">Latest Works</h3>
              <div className="row g-1 g-sm-4 row-cols-3">
                <WorkPreview
                  imageSource="rentcalc-main2.png"
                  linkSource={() =>
                    showWork === "first"
                      ? setShowWork("")
                      : setShowWork("first")
                  }
                  imageAlt="Partial image of the main window for the rent estimator application"
                />

                <WorkPreview
                  imageSource="debts-table.png"
                  linkSource={() =>
                    showWork === "second"
                      ? setShowWork("")
                      : setShowWork("second")
                  }
                  imageAlt=""
                />
                <WorkPreview
                  imageSource="https://placehold.co/60x70"
                  linkSource={() =>
                    showWork === "third"
                      ? setShowWork("")
                      : setShowWork("third")
                  }
                  imageAlt=""
                />
              </div>
              <div className="row g-0 mb-4 row-cols-3 title-color fs-2 text-center">
                <div>
                  {showWork === "first" && (
                    <FontAwesomeIcon icon={faAnglesDown} />
                  )}
                </div>
                <div>
                  {showWork === "second" && (
                    <FontAwesomeIcon icon={faAnglesDown} />
                  )}
                </div>
                <div>
                  {showWork === "third" && (
                    <FontAwesomeIcon icon={faAnglesDown} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {showWork === "first" && (
        <>
          <div className="zigzag"></div>
          <WorkShowcase />
        </>
      )}

      {showWork === "second" && null}

      {showWork === "third" && null}
    </div>
  );
}

export default App;
