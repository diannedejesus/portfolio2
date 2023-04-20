import viteLogo from "/vite.svg";

interface Props {
  backColor: string;
  width: string;
}

function Second() {
  return (
    <section className="row container-fluid text-center p-5">
      <section className="col d-flex align-items-center">
        <div className="card border-0">
          <div className="card-body">
            <h2 className="card-title">Our Mission</h2>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              cupiditate maxime corrupti, laboriosam labore eligendi totam
              libero consequatur fuga impedit blanditiis dolorem! Nemo,
              doloribus? Cum voluptates omnis blanditiis unde reprehenderit.
            </p>
          </div>
        </div>
      </section>
      <section className="col">
        <div className="container">
          <div className="row">
            <div className="col bg-secondary m-2">
              <img src="http://via.placeholder.com/100x200" alt="" />
            </div>
            <div className="col bg-secondary m-2">
              <img src="http://via.placeholder.com/100x200" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col bg-secondary m-2">
              <img src="http://via.placeholder.com/100x100" alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Second;
