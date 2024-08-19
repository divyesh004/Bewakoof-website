import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { Authcontext } from '../ContextApi/Search'

const Navbar = () => {

  // const { searchQuery, searchvaluefunction } = useContext(Authcontext);
  return (
    <div style={{ position: "fixed", width: "100%", zIndex: "99999" }}>
      <div className="container-fluid" style={{ backgroundColor: "#EEEEEE", height: "30px", fontSize: "10px", fontWeight: "500", fontFamily: "montserrat, sans-serif", fontStyle: "normal" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="col-10">
                <ul className="list-unstyled d-flex">
                  <li><Link style={{ color: "#333333" }} className="nav-link pb-0">Offer</Link></li>
                  <li><Link style={{ color: "#333333" }} className="nav-link pb-0">Fan Book</Link></li>
                  <li><Link style={{ color: "#333333" }} className="nav-link pb-0">
                    <i className="bi bi-phone" aria-hidden="true"> Download App</i>
                  </Link></li>
                  <li><Link style={{ color: "#333333" }} className="nav-link pb-0">TriBe Membership</Link></li>
                  <li><Link style={{ color: "#333333" }} className="nav-link pb-0">Find a store near me</Link></li>
                </ul>
              </div>
              <div className="col-2">
                <ul className="d-flex list-unstyled">
                  <li><Link style={{ color: "#333333" }} className="nav-link pb-0">Contact Us</Link></li>
                  <li><Link style={{ color: "#333333" }} className="nav-link pb-0">Track Order</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container-fluid border-bottom" style={{ height: "50px", background: "white" }}>
        <div className="container pb-0">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-2" style={{ display: 'inline-block', height: "inherite" }}>
                <Link className="nav-link" to="/"> <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" style={{ height: "20px", verticalAlign: "middle", marginBottom: "5px", width: "147px" }}></img></Link>
              </div>
              <div className="col-5" style={{ textAlign: "left", fontFamily: "montserrat, sans-serif", fontSize: "13px", lineHeight: "30px", letterSpacing: "1px" }}>
                <ul className="list-unstyled d-flex align-items-center">
                  <li><Link className="nav-link link-dark" to={"Men"}>MEN</Link></li>
                  <li><Link className="nav-link link-dark" to={"Women"}>WOMEN</Link></li>
                  <li><Link className="nav-link link-dark" to={"Mobile-Covers"}>MOBILE COVERS</Link></li>
                </ul>
              </div>
              <div className="col-5 p-1">
                <div className="containers">
                  <div className="search-bar">
                    <span className="search-icon">
                      <i className="bi bi-search"></i>
                    </span>
                    <input placeholder="Search by product, category, or collection" className="search-text" style={{ width: "90%", border: "none", backgroundColor: "#f2f2f2" }}></input>
                  </div>
                  <div className="icons">
                    <Link style={{ textDecoration: "none", color: "black" }} to="/Login"> <span>Login</span></Link>
                    <Link style={{ textDecoration: "none", color: "black" }}><div className="bi bi-heart"></div></Link>
                    <Link to={"Cart"} style={{ textDecoration: "none", color: "black" }}><div className="bi bi-bag"></div></Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12" style={{ padding: "0px 20px" }}>
              <ul className="list-unstyled d-flex justify-content-between">
                <li><Link className="nav-link link-dark fw-bold">MEN</Link></li>
                <li><Link className="nav-link link-dark fw-bold">WOMEN</Link></li>
                <li><Link className="nav-link link-dark fw-bold">ACCESSORIES</Link></li>
                <li><Link className="nav-link link-dark fw-bold">SNEAKERS</Link></li>
                <li><Link className="nav-link link-dark fw-bold">UP TO 70% OFF</Link></li>
                <li><Link className="nav-link link-dark fw-bold">BWKF X GOOGLE</Link></li>
                <li><Link className="nav-link link-dark fw-bold">BEWAKOOF AIR</Link></li>
                <li><Link className="nav-link link-dark fw-bold">HEAVY DUTY</Link></li>
                <li><Link className="nav-link link-dark fw-bold">CUSTOMIZATION</Link></li>
                <li><Link className="nav-link link-dark fw-bold">OFFICAL MERCH</Link></li>
                <li><Link className="nav-link link-dark fw-bold">PLUS SIZE</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Navbar
