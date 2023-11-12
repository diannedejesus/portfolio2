//import viteLogo from "/vite.svg";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-md p-0">
      <a className="navbar-brand mx-3" href="/">
        <img
          src="logo.png"
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
            <a
              className="nav-link"
              aria-current="page"
              href="https://github.com/diannedejesus"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/diannedejesus/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Other
            </a>
            <ul className="dropdown-menu dropdown-menu-end border-0 bg-transparent">
              <li>
                <h6 className="dropdown-header">Learn & Fun</h6>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://overthewire.org/wargames/bandit"
                  target="_blank"
                >
                  Bandit wargame
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-8&r%5B%5D=-7&tags=Recursion&beta=false&order_by=total_completed%20desc"
                  target="_blank"
                >
                  Recursion
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.youtube.com/watch?v=SqcY0GlETPk"
                  target="_blank"
                >
                  Learn React
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
