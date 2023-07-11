import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
const blanjaIicon = require('../img/blanja.png')
const filterIcon = require('../img/filter.png')
const cart = require('../img/cart.png')

const Nav = () => {
  return (
    <>
      <header>
        <nav
          id="home-nav "
          className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        >
          <div className="blanja-icon" style={{marginLeft: 100}}>
            <Link to="/home">
              <a className="logo-blanja mr-5" href="/index.html">
                <img
                  src={blanjaIicon}
                  height={50}
                  className="d-inline-block align-top"
                  alt=""
                />
              </a>
            </Link>

          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02" sty>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ml-2 form-inline row justify-content-center">
                <input
                  id="searchbox"
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <img
                  className="searchLogo"
                  src=""
                  alt=""
                  style={{ position: "absolute", marginLeft: 400 }}
                />
                <img
                  id="homeFilter"
                  className="mr-4"
                  src={filterIcon}
                  alt="filter"
                />
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 row justify-content-center" style={{marginRight: 100}}>
              <a href="./pages/orders.html">
                <img className="mr-4" src={cart} alt="cart" />
              </a>
              <div className="btn-login-index">
                <Link to="/login">
                  <a onClick={Login}>
                    <button
                      className="btn btn-danger rounded-pill mr-2"
                      style={{ width: 100, height: 36 }}
                      type="button"
                    >
                      Login
                    </button>
                  </a>
                </Link>
                <Link to="/register">
                  <a href="./pages/signup.html">
                    <button
                      className="btn border rounded-pill"
                      style={{ width: 100, height: 36 }}
                      type="button"
                    >
                      Signup
                    </button>
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Nav