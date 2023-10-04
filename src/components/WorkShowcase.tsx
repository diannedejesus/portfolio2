interface Props {
  imageSource?: string;
  imageAlt?: string;
  imageSource2?: string;
  imageAlt2?: string;
  imageSource3?: string;
  imageAlt3?: string;
  imageSource4?: string;
  imageAlt4?: string;
}

function WorkShowcase({
  imageSource,
  imageAlt,
  imageSource2,
  imageAlt2,
  imageSource3,
  imageAlt3,
  imageSource4,
  imageAlt4,
}: Props) {
  return (
    <>
      <section className="text-center pt-5 showcase-theme">
        <p className="text-uppercase m-0 fs-6 fw-lighter">Rent Estimations</p>
        <h1>
          Give participants the best{" "}
          <span className="word-highlight">start</span> in finding a home
        </h1>
        <section className="d-flex justify-content-around mb-5">
          <div className="card m-2 m-md-4 bg-transparent border-0">
            <img
              className="rounded"
              src={imageSource ? imageSource : "https://placehold.co/850x450"}
              alt={imageAlt ? imageAlt : "Placeholder Text"}
            />
            <p className="fs-6 fw-lighter d-flex justify-content-start px-2">
              * Built with the reliability of WPF, XAML, C# to run on all your
              PCs
            </p>
          </div>
          <div className="card m-2 m-md-4 bg-transparent border-0">
            <img
              className="card-img-top rounded"
              src={imageSource2 ? imageSource2 : "https://placehold.co/275x500"}
              alt={imageAlt2 ? imageAlt2 : "Placeholder Text"}
            />
          </div>
        </section>

        <p className="text-uppercase m-0 fs-6 fw-lighter">
          Provide the best information
        </p>
        <h2>Customizable data, reliable results</h2>
        <section className="d-flex justify-content-around pb-5">
          <img
            className="card m-2 m-md-4 bg-transparent rounded border-0"
            src={imageSource3 ? imageSource3 : "https://placehold.co/600x400"}
            alt={imageAlt3 ? imageAlt3 : "Placeholder Text"}
          />
          <img
            className="card m-2 m-md-4 bg-transparent rounded border-0"
            src={imageSource4 ? imageSource4 : "https://placehold.co/600x400"}
            alt={imageAlt4 ? imageAlt4 : "Placeholder Text"}
          />
        </section>
      </section>
    </>
  );
}

export default WorkShowcase;
