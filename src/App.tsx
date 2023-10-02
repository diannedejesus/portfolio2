import { useState } from "react";
import WorkPreview from "./components/WorkPreview";
import "./components/custom.css";
import Navigation from "./components/Navigation";
import HeroImage from "./components/HeroImage";
import WorkShowcase from "./components/WorkShowcase";

function App() {
  const [showWork, setShowWork] = useState("");

  return (
    <div>
      <header className="">
        <Navigation />
        <div className="p-1 p-sm-5 bg-image row gap-5 align-items-center">
          <div className="col-lg-6 col-md-9">
            <HeroImage />
            <div className="mt-5">
              <h3 className="text-start mb-4 fs-2">Latest Works</h3>
              <div className="row g-1 g-sm-4 row-cols-3">
                <WorkPreview
                  imageSource="rentcalc-main2.png"
                  linkSource={() =>
                    showWork ? setShowWork("") : setShowWork("Rentestimator")
                  }
                  imageAlt="Main window for rent estimator application"
                />
                <WorkPreview
                  imageSource="https://placehold.co/60x70"
                  linkSource={() =>
                    showWork ? setShowWork("") : setShowWork("Second")
                  }
                  imageAlt=""
                />
                <WorkPreview
                  imageSource="https://placehold.co/60x70"
                  linkSource={() =>
                    showWork ? setShowWork("") : setShowWork("third")
                  }
                  imageAlt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {showWork && <WorkShowcase />}
    </div>
  );
}

export default App;
