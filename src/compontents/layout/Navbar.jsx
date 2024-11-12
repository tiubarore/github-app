import { useEffect } from "react";
import { themeChange } from "theme-change";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            Github Profile Finder
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-md rounded-btn text-lg">
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-md rounded-btn text-lg"
            >
              About
            </Link>
            <select className="select select-bordered" data-choose-theme>
              <option value="dark">Dark</option>
              <option value="synthwave">Synthwave</option>
              <option value="cyberpunk">Cyberpunk</option>
              <option value="coffee">Coffee</option>
              <option value="halloween">Halloween</option>
              <option value="forest">Forest</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
