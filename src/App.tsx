import { useState } from "react";
import WorkPreview from "./components/WorkPreview";
import "./components/custom.css";
import Navigation from "./components/Navigation";
import HeroImage from "./components/HeroImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./components/ContactForm";

function App() {
  const [showWork, setShowWork] = useState("");
  const [showContactForm, setContactForm] = useState(false);

  return (
    <main>
      <Navigation />
      <div className="mt-3 mt-sm-5 px-4 px-sm-5 bg-image">
        <div className="col-md-7">
          <HeroImage
            click={() =>
              showContactForm ? setContactForm(false) : setContactForm(true)
            }
          />
        </div>
        <div className="mt-5 mt-lg-5 col-lg-7 col-md-9">
          <h3 className="text-start mb-3 fs-4">Latest Works</h3>
          <div className="row g-1 g-sm-4 row-cols-2 row-cols-sm-3">
            <WorkPreview
              imageSource="rentcalc-main.png"
              linkSource={() =>
                showWork === "first" ? setShowWork("") : setShowWork("first")
              }
              imageAlt="Image of the main window for the rent estimator application which estimates the rent for a PHA participant/solicitant"
              title="Rent Estimator"
              link="https://github.com/diannedejesus/RentEstimatorSolution"
            />

            <WorkPreview
              imageSource="debts-table.png"
              linkSource={() =>
                showWork === "second" ? setShowWork("") : setShowWork("second")
              }
              imageAlt="Partial screenshot of the case review page of an application for managing debts owed to a PHA"
              title="Debt Manager"
              link="https://github.com/diannedejesus/debt_tracker"
            />

            <WorkPreview
              imageSource="todoapp.png"
              linkSource={() =>
                showWork === "third" ? setShowWork("") : setShowWork("third")
              }
              imageAlt="Partial screenshot of the main page of an application for managing you todo list"
              hiddenOption="d-none d-sm-block"
              title="The Todo List"
              link="https://github.com/diannedejesus/the-todo-app"
            />
          </div>
          <div className="row g-0 mb-4 row-cols-2 row-cols-md-3 title-color fs-2 text-center">
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

      {showContactForm && (
        <div className="mt-3 mt-sm-5 px-4 px-sm-5">
          <ContactForm />
        </div>
      )}
    </main>
  );
}

export default App;
