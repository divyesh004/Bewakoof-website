import React from 'react'
import { Link, NavLink } from 'react-router-dom'

//data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
const Navbar_M = () => {
  return (
    <div>
      <div className="container-fluid bg-warning">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0 p-2 d-flex align-items-center justify-content-between">
              <div className="col-1">
                <i class="bi bi-filter-left" style={{ fontSize: "35px" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"></i>
              </div>
              <div className="col-7">
                <Link to={"/"}><img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" className="img-fluid w-25"></img></Link>
              </div>
              <div className="col-3">
                <div className="d-flex justify-content-end">
                  <Link className="nav-link link-dark"><i class="bi bi-heart" style={{ fontSize: "20px" }}></i></Link>
                  <Link to={"/Cart"} className="nav-link link-dark ps-0 pe-0"><i class="bi bi-bag" style={{ fontSize: "20px" }}></i></Link>
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>
      <div className="offcanvas offcanvas-start w-75" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header border-bottom pb-0">
          <div className="welcomeHeader"><h5 class="welcomeGuest" style={{ fontFamily: "montserrat-bold,sans-serif", fontSize: "16px", color: "#000", lineHeight: "normal", fontWeight: '700' }}>Welcome Guest
            <div className="register" style={{ fontFamily: "montserrat-bold,sans-serif", fontSize: "14px", fontFamily: "montserrat-bold,sans-serif", padding: "0px 0px" }}><Link to={"/Login"} className="nav-link ps-0" style={{ color: "gray", fontWeight: "300" }}>Login / Sign Up</Link></div></h5></div>
        </div>
        <div className="offcanvas-body p-0">
          <div style={{ padding: "16px" }}>
            <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <p style={{ fontSize: "12px", fontFamily: "montserrat-bold,sans-serif", color: "rgba(0,0,0,.3)", lineHeight: "normal", fontWeight: "bold" }}>SHOP IN</p>
              <ul className="list-unstyled" style={{ lineHeight: "48px" }}>
                <li className="MenuListOption "><Link to={"/Men"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Men<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Women<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Accessories<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-icon-accessories--1--1684748737.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Bewakoof Sneakers<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-sneaker-1718779684.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Clearance Store<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--7--1719507523.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Customize with Google Ai<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168-googleai-1718944672.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Shop by Fandom<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-icon-character-shop--1--1684748738.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Specials<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-icon-specials-1684824538.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "14px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Customise your own T-Shirt<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-icon-customisation--1--1684748736.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
              </ul>
              <p style={{ fontSize: "12px", fontFamily: "montserrat-bold,sans-serif", color: "rgba(0,0,0,.3)", lineHeight: "normal", fontWeight: "bold" }}>ENGAGE</p>
              <ul className="list-unstyled" style={{ lineHeight: "48px" }}>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Vote for Designs<img class="navIcon" alt="" src="https://images.bewakoof.com/nav_menu/Circle-icon-vote-for-designs-02-1684824580.png" style={{ float: "right", height: "30px", position: "absolute", right: "20px", top: "8px" }}></img></Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Refer and Earn</Link></li>
                <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Find a Store<sup class="newIndicator" style={{ fontSize: "9px", color: "#e02020", textShadow: "0 0 4px #eac323" }}>NEW</sup></Link></li>
              </ul>
            </div>


          </div>
          <div style={{ backgroundColor: "rgb(243, 243, 243)", }}>
            <p style={{ fontSize: "12px", fontFamily: "montserrat-bold,sans-serif", color: "rgba(0,0,0,.3)", lineHeight: "normal", fontWeight: "bold", padding: "14px 20px 5px" }}>CONTACT US</p>
            <ul className="list-unstyled mb-0" style={{ lineHeight: "48px", padding: "0px 16px 16px 16px", marginBottom: "none" }}>
              <li class="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Help & Support</Link></li>
              <li class="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Feedback & Suggestions</Link></li>
              <li class="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Become a Seller</Link></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(243, 243, 243)" }}>
            <p style={{ fontSize: "12px", fontFamily: "montserrat-bold,sans-serif", color: "rgba(0,0,0,.3)", lineHeight: "normal", fontWeight: "bold", padding: "14px 20px 5px" }}>ABOUT US</p>
            <ul className="list-unstyled mb-0" style={{ lineHeight: "48px", padding: "0px 16px 16px 16px" }}>
              <li class="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Our Story</Link></li>
              <li class="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Fanbook</Link></li>
              <li class="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Blog</Link></li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled mb-0" style={{ lineHeight: "48px", padding: "0px 0px 0px 16px" }}>
              <li className="MenuListOption "><Link to={"/"} className="nav-link" style={{ display: "block", padding: "0px 50px 0px 0px", fontSize: "15px", fontWeight: "600", color: "#000", position: "relative", margin: "0" }}>Login</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="container-fluid" style={{ boxShadow: "0 -1px 10px rgba(0, 0, 0, .1)", position: "fixed", bottom: "0%", zIndex: "100", backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>

                <ul className="list-unstyled d-flex justify-content-around mb-0">
                  <li className="active"> <NavLink style={({ isActive }) => {
                    return (isActive ? { color: "black" } : { color: "#ccc" })
                  }} to='/' className="nav-link p-0 d-flex flex-column align-items-center"><i class="bi bi-arrow-up-left-square-fill text-warning"></i>
                    <p>Home</p>
                  </NavLink></li>
                  <li> <NavLink style={({ isActive }) => {
                    return (isActive ? { color: "black" } : { color: "#ccc" })
                  }} to='/Categorie_m' className="nav-link p-0 d-flex flex-column align-items-center"><i class="bi bi-tag-fill text-warning"></i>
                    <p>Categories</p>
                  </NavLink></li>
                  <li> <NavLink style={({ isActive }) => {
                    return (isActive ? { color: "black" } : { color: "#ccc" })
                  }} to='/Exprole' className="nav-link p-0 d-flex flex-column align-items-center"><i class="bi bi-star-fill text-warning"></i>
                    <p>Explore</p>
                  </NavLink></li>
                  <li> <NavLink style={({ isActive }) => {
                    return (isActive ? { color: "black" } : { color: "#ccc" })
                  }} to='/Login' className="nav-link p-0 d-flex flex-column align-items-center"><i class="bi bi-person-circle text-warning"></i>
                    <p>Profile</p>
                  </NavLink></li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div >


  )
}

export default Navbar_M
