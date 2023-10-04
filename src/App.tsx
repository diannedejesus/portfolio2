import { useState } from "react";
import WorkPreview from "./components/WorkPreview";
import "./components/custom.css";
import Navigation from "./components/Navigation";
import HeroImage from "./components/HeroImage";
import WorkShowcase from "./components/WorkShowcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showWork, setShowWork] = useState("");

  return (
    <div>
      <header>
        <Navigation />
        <div className="p-3 p-sm-5 bg-image gap-5 align-items-center">
          <div className="col-lg-6 col-md-9">
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
                  imageAlt="Main window for rent estimator application"
                />

                <WorkPreview
                  imageSource="https://placehold.co/60x70"
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

      {showWork && (
        <WorkShowcase
          imageSource="rent-calculator.gif"
          imageAlt="This GIF shows all the windows for app customization, the main window and an example of the PDF produced"
          imageSource2="rentcalc-main.png"
          imageAlt2="This images shows the main window of the app, which lets you input voucher size, annual income, number of dependants and whether the family is elderly or/and disabled"
          imageSource3="rentcalc-utilities.png"
          imageAlt3="This images shows the utilities window of the app, which lets you input the cuurent utilities allowance for each voucher size"
          imageSource4="rentcalc-pdf.png"
          imageAlt4="This images shows an example of the pdf produced by the app which display some information about the calculation and its results"
        />
      )}
    </div>
  );
}

export default App;
