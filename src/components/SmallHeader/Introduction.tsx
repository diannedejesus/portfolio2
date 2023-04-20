function Introduction() {
  return (
    <section className="w-100 mx-auto text-start">
      <div className="card border-0 text-bg-secondary">
        <div className="card-body">
          <h2 className="card-title fs-2 lh-base">
            Hello, I'm <br />{" "}
            <span className="text-nowrap">
              a{" "}
              <span className="fw-bolder text-primary">
                {"{ Software Developer }"}
              </span>
            </span>
          </h2>
          <p className="card-text w-100">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            cupiditate maxime corrupti, laboriosam labore eligendi totam libero
            consequatur fuga impedit blanditiis dolorem! Nemo, doloribus?
          </p>
          <div className="">
            <a href="#" className="me-4 px-4 btn btn-warning">
              Hire Me
            </a>

            <a href="#" className="link-dark btn">
              Or let's connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
