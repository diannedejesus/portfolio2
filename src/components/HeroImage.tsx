import WorkPreview from "./WorkPreview";
// import "./custom.css";

function HeroImage() {
  return (
    <section className="herosection">
      <div className="card border-0 bg-transparent">
        <div className="card-body p-0">
          <h2 className="card-title fs-3 lh-1 mb-2">
            Hello, I'm Dianne M. De Jesús a{" "}
            <span className="fs-2 fw-bolder title-color">
              {"{ Software Developer }"}
            </span>
          </h2>
          <p className="card-text m-0">
            who is ready to take on new diverse tasks, collaborate with team
            memebers or clients and deliver the desired results in the
            established time-frame.
          </p>
          <div className="mt-4 mt-lg-5">
            <a href="#" className="fs-5 me-2 py-2 px-4 btn button-theme">
              Contact me
            </a>

            <a href="#" className="link-dark btn fs-6">
              Or let's connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
