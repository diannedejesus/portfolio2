import Navigation from "../Navigation";
import Introduction from "../SmallHeader/Introduction";
import HeroImage from "../SmallHeader/HeroImage";

function Header() {
  return (
    <header className="text-center">
      <Navigation />
      <div className="justify-content-center align-items-center">
        <HeroImage />
        <Introduction />
      </div>
    </header>
  );
}

export default Header;
