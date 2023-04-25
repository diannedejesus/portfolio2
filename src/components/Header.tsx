import Navigation from "./Navigation";
import Introduction from "./Introduction";
import HeroImage from "./HeroImage";

function Header() {
  return (
    <header className="">
      <Navigation />
      <div className="p-5 bg-image">
        <div className="row gap-5 align-items-center">
          <div className="col-md-6 col-sm-12">
            <HeroImage />
          </div>
          <div className="col hidden-sm-down">
            <Introduction />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
