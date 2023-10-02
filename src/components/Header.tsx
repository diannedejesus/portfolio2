import Navigation from "./Navigation";
import Introduction from "./Introduction";
import HeroImage from "./HeroImage";

function Header() {
  return (
    <header className="">
      <Navigation />
      <div className="p-1 p-sm-5 bg-image">
        <div className="row gap-5 align-items-center">
          <div className="col-lg-6 col-md-9">
            <HeroImage />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
