interface Props {
  imageSource?: string;
  imageAlt?: string;
}

function WorkShowcase({ imageSource, imageAlt }: Props) {
  return (
    <>
      <section className="text-center pt-5 showcase-theme">
        <p className="text-uppercase m-0 fs-6 fw-lighter">Rent Estimations</p>
        <h1>
          Give participants the best{" "}
          <span className="word-highlight">start</span> in finding a home
        </h1>
        <section className="d-flex justify-content-around mb-5">
          <div className="card m-4 bg-transparent border-0">
            <img
              className="rounded"
              src="https://placehold.co/850x450"
              alt="main image"
            />
            <p className="fs-6 fw-lighter d-flex justify-content-start px-2">
              * Built with the reliability of WPF, XAML, C# to run on all your
              PCs
            </p>
          </div>
          <img
            className="card m-4 bg-transparent rounded border-0"
            src="https://placehold.co/275x500"
            alt="gif"
          />
        </section>

        <p className="text-uppercase m-0 fs-6 fw-lighter">
          Provide the best information
        </p>
        <h2>Customizable data, reliable results</h2>
        <section className="d-flex justify-content-around  pb-5">
          <img
            className="card m-4 bg-transparent rounded border-0"
            src="https://placehold.co/600x400"
          />
          <img
            className="card m-4 bg-transparent rounded border-0"
            src="https://placehold.co/600x400"
          />
        </section>
      </section>
    </>
  );
}

export default WorkShowcase;
