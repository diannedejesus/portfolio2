interface Props {
  click: () => void;
}

function HeroImage({ click }: Props) {
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
            members or clients and deliver the desired results in the
            established time-frame. I also enjoy learning new topics and taking
            on new projects.
          </p>
          <div className="mt-4 mt-lg-5">
            <a
              href="#contact"
              className="fs-5 me-2 py-2 px-4 btn button-theme"
              onClick={click}
            >
              Contact me
            </a>

            <a
              href="https://twitter.com/dianne_djs"
              target="_blank"
              className="link-dark btn fs-6"
            >
              Or let's connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
