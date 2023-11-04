function WorkShowcase() {
  return (
    <>
      <section className="text-center showcase-theme">
        <section className="m-4 mb-5 pb-3 text-bg-danger border border-5 border-opacity-25 border-dark rounded">
          <div className="card bg-transparent border-0">
            <div className="">
              <div className="d-flex align-items-center">
                <div className="card-body">
                  <p className="card-title fw-lighter">Rent Estimations</p>
                  <p className="card-text fs-3">
                    Give participants the best{" "}
                    <span className="word-highlight">start</span> in finding a
                    home
                  </p>
                </div>
              </div>
              <div className="col-md-7 p-0 m-auto">
                <img
                  src="rent-calculator.gif"
                  className="img-fluid border border-1 border-dark border-opacity-75 rounded"
                  alt="This GIF shows all the windows for app customization, the main window and an example of the PDF produced"
                />
                <p className="fs-6 fw-lighter m-0">
                  * Built with the reliability of WPF, XAML, C# to run on all
                  your PCs
                </p>
              </div>
            </div>
          </div>
        </section>

        <p className="text-uppercase m-0 fs-6 fw-lighter">
          Provide the best information
        </p>
        <h2>Customizable data, reliable results</h2>
        <section className="d-flex justify-content-around pb-5">
          <img
            className="card m-2 m-md-4 bg-transparent rounded border-0"
            src="rentcalc-utilities.png"
            alt="This images shows the utilities window of the app, which lets you input the cuurent utilities allowance for each voucher size"
          />
          <img
            className="card m-2 m-md-4 bg-transparent rounded border-0"
            src="rentcalc-pdf.png"
            alt="This images shows an example of the pdf produced by the app which display some information about the calculation and its results"
          />
        </section>
        <div className="card m-2 m-md-4 bg-transparent border-0">
          <img
            className="card-img-top rounded"
            src="rentcalc-main.png"
            alt="This images shows the main window of the app, which lets you input voucher size, annual income, number of dependants and whether the family is elderly or/and disabled"
          />
        </div>
      </section>
    </>
  );
}

export default WorkShowcase;
