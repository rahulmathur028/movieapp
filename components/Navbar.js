import React from "react";

const navbar = () => {
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand" href="#" id="textcolor">
            <a href="/">
              <img src="/image/tmdb.png" alt="" width={200} />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="textcolor"
                >
                  Movies
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Now Playing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Upcoming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Top Rated
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="textcolor"
                >
                  TV Shows
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Airing Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      On TV
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Top Rated
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightnavcontent">
        <ul id="textcolor" className="rightnav">
          <li className="rightnavlist" id="rightnavlist1">+</li>
        <li className="rightnavlist"> <div className="buttonborder"> En</div></li>
          <li className="rightnavlist">Login</li>
          <li className="rightnavlist" id="jointmdb">Join TMDB</li>
          <li className="rightnavlist"><i className="ri-search-line"></i></li>
        </ul>
        </div>
      </nav>

    </div>
  );
};

export default navbar;
