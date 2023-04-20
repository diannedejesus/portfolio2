import Navigation from "./Navigation";
import Introduction from "./Introduction";
import HeroImage from "./HeroImage";

function Header() {
  return (
    <header className="text-center">
      <Navigation />
      <div className="container-lg d-inline-flex m-5 justify-content-evenly align-items-center">
        <Introduction />
        <HeroImage />
      </div>
    </header>
  );
}

export default Header;
