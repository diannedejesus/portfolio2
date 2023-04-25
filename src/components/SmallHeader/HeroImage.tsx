import PersonalAvatar from "/pic.png";

function HeroImage() {
  return (
    <section className="d-flex flex-column d-inline-flex my-4">
      <ul className="list-group list-group-horizontal m-2 rounded-0">
        <li className="list-group-item list-group-item-primary rounded-0">
          UI
        </li>
        <li className="list-group-item list-group-item-primary">React</li>
        <li className="list-group-item list-group-item-primary">Code</li>
        <li className="list-group-item list-group-item-primary">JS</li>
        <li className="list-group-item rounded-0">More...</li>
      </ul>

      <div className="d-inline-flex justify-content-center">
        <img
          src={PersonalAvatar}
          width="85%"
          className="d-inline-block align-text-right align-top rounded"
          alt="Personal logo"
        />
      </div>

      <div className="">
        <p className="fs-2 text-center">Dianne M. De Jesús</p>
      </div>
    </section>
  );
}

export default HeroImage;
