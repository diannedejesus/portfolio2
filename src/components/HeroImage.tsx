import PersonalAvatar from "/pic.png";

function HeroImage() {
  return (
    <section className="d-flex flex-column d-inline-flex">
      <div className="d-inline-flex">
        <img
          src={PersonalAvatar}
          width="200px"
          className="d-inline-block align-text-right align-top"
          alt="Personal logo"
        />
        <ul className="list-group d-inline-block rounded-0">
          <li className="list-group-item list-group-item-primary">Front-end</li>
          <li className="list-group-item list-group-item-primary">React</li>
          <li className="list-group-item list-group-item-primary">Back-end</li>
          <li className="list-group-item list-group-item-primary">
            Javascript
          </li>
          <li className="list-group-item p-1">More...</li>
        </ul>
      </div>
      <div className="">
        <p className="fs-2 list-group-item list-group-item-primary text-center">
          Dianne M. De Jesús
        </p>
      </div>
    </section>
  );
}

export default HeroImage;
