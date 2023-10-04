import viteLogo from "/vite.svg";
import "bootstrap/js/dist/collapse";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-md p-0">
      <a
        className="navbar-brand mx-3"
        href="https://vitejs.dev"
        target="_blank"
      >
        <img
          src={viteLogo}
          className="logo d-inline-block align-text-top"
          alt="Personal logo"
        />
      </a>

      <button
        className="navbar-toggler order-0 mx-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse order-3 mx-3 justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link disabled" aria-current="page" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
