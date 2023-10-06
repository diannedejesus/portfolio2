import WorkPreview from "./WorkPreview";
// import "./custom.css";

function HeroImage() {
  return (
    <section className="">
      <div className="card border-0 bg-transparent w-75">
        <div className="card-body">
          <h2 className="card-title fs-2 lh-1">
            Hello, I'm Dianne M. De Jesús a{" "}
            <span className="fs-1 fw-bolder title-color">
              {"{ Software Developer }"}
            </span>
          </h2>
          <p className="card-text">
            Who is currently building projects that serve my current clients and
            my own personal curiosities and interests.
          </p>
          <div className="mt-5">
            <a href="#" className="fs-3 me-4 py-3 px-5 btn button-theme">
              Hire Me
            </a>

            <a href="#" className="link-dark btn fs-5">
              Or let's connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
