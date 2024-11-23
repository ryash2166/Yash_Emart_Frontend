import { useState } from "react";

// Bootstrap NavBar
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

// Images
import Demo from "../assets/demo.webp";
import Product1 from "../assets/product1.webp";
import Product2 from "../assets/product2.webp";
import Shop from "../assets/shop.webp";
import SchoolBag from "../assets/school-bag.png";
import Dress from "../assets/dress.png";
import Chair from "../assets/chair-1.png";
import Logo from "../assets/emart.webp";

// Router-Dom
import { Link, NavLink } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// Authentication
import { useAuth0 } from "@auth0/auth0-react";

// Logo
import { MdLogout } from "react-icons/md";

function Navbar1() {

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const result = useSelector((state) => state.Reducer);
  const WishList = useSelector((state) => state.WishReducer);

  let [demo, setDemo] = useState(false);
  let demoDropdown = (e) => {
    setDemo(true);
  };
  let DemoDropdown = (e) => {
    setDemo(false);
  };

  let [product, setProduct] = useState(false);
  let productDropdown = (e) => {
    setProduct(true);
  };
  let ProductDropdown = (e) => {
    setProduct(false);
  };

  let [shop, setShop] = useState(false);
  let shopDropdown = (e) => {
    setShop(true);
  };
  let ShopDropdown = (e) => {
    setShop(false);
  };

  let [blog, setBlog] = useState(false);
  let blogDropdown = (e) => {
    setBlog(true);
  };
  let BlogDropdown = (e) => {
    setBlog(false);
  };

  let [contact, setContact] = useState(false);
  let contactDropdown = (e) => {
    setContact(true);
  };
  let ContactDropdown = (e) => {
    setContact(false);
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop < 10
    ) {
      document.getElementById("navbar").style.top = "0px";
    } else if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop < 300
    ) {
      document.getElementById("navbar").style.top = "-150px";
    } else if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop < 700
    ) {
      document.getElementById("navbar").style.top = "0px";
    }
  }

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="z-10 w-full fixed block bg-white px-[20px] py-[10px] pr-[7px] max-lg:pr-0 max-lg:px-0 border-b-[1px] "
          id="navbar"
        >
          <Container fluid>
            <Link to="/" className="max-[1201px]:order-2 max-md:ml-6">
              <img
                alt="logo"
                className="h-9 w-auto max-md:h-7"
                src={Logo}
                width="147"
                height="31"
              />
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="max-[1201px]:order-1 border-0"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton className="mr-2">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={Logo} alt="" className="h-9 w-auto " />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-white">
                <Nav className=" justify-content-center flex-grow-1 pr-3 m-0 bg-white ">
                  <form
                    action=""
                    className="flex nav-search border w-full lg:hidden mb-[20px] ml-2"
                  >
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search..."
                      className=" w-full px-[12px] py-[10px] outline-none"
                    />
                    <button type="nosubmit" className=""></button>
                  </form>
                  <NavDropdown
                    title={
                      <div className="flex justify-between items-center gap-2 mx-2 max-xl:w-full drop text-dark max-xl:pb-2 max-[1200px]:border-b-[1px] max-xl:px-0 ">
                        Demo
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-3 h-5 arrow"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    show={demo}
                    onMouseEnter={demoDropdown}
                    onMouseLeave={DemoDropdown}
                  >
                    <div className="center -ml-[200px] -mt-[6px] absolute bg-white px-[20px]  max-2xl:p-0 max-xl:-ms-[320px]  max-xl:relative">
                      <div className="h-[1px] bg-[#e5e7eb] -ml-5 w-[1900px]  max-xl:hidden"></div>
                      <section className="flex items-center ms-[300px]  h-[500px]  max-xl:block max-xl:h-auto">
                        <div className="flex max-xl:block py-[50px] max-xl:py-0">
                          <div className="max-xl:hidden max-xl:ml-0">
                            <div className="py-[50px] max-xl:p-0">
                              <img src={Demo} alt="" />
                              <div className="">
                                <p className="mb-[8px] font-[jost] text-[21px] pt-[20px] pb-[10px]">
                                  New Product on the market
                                </p>
                                <p
                                  onClick={() => setDemo(false)}
                                  className="font-bold text-[16px] text-muted add hover:translate-x-2 -ml-3 duration-300 ease-in-out"
                                >
                                  <NavLink to="shopnow">Shop Now</NavLink>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="pl-[50px] pr-2 max-xl:m-0 max-xl:my-0 max-xl:border-0 py-[50px] max-xl:p-0  leading-8 max-xl:leading-6">
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Fashion Hub
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Kids Wear
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Women Fashion
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Big Fashion
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Handicraft
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Interior
                            </NavDropdown.Item>
                          </div>
                          <div className="bg-[#e5e7eb] w-[1px] -my-[16px] ml-10 max-xl:hidden"></div>
                          <div className="py-[50px] pl-[50px] pr-[1px] max-xl:p-0 leading-8 max-xl:leading-6 overflow-hidden">
                            <div className="text-muted py-[8px] pl-[15px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out">
                              <Link to="/" onClick={() => setDemo(false)}>
                                Plant Garden
                              </Link>
                            </div>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Kids Toys
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Electronic Gadget
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Bathroom
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Bicycle
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Shoes
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Bags
                            </NavDropdown.Item>
                          </div>
                          <div className="bg-[#e5e7eb] w-[1px] -my-[16px] ml-10 max-xl:hidden"></div>
                          <div className=" py-[50px] pl-[50px]  max-xl:p-0 leading-8 max-xl:leading-6 overflow-hidden">
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Soap
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Grocery Outlet
                              <Badge
                                className="ml-[6px] px-[10px] text-center  font-medium py-[2px]"
                                pill
                                bg="danger"
                              >
                                new
                              </Badge>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Hiking Heaven
                              <Badge
                                className="ml-[6px] px-[10px] text-center  font-medium py-[2px]"
                                pill
                                bg="danger"
                              >
                                new
                              </Badge>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setDemo(false)}
                              className="text-muted py-[8px] text-[17px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Exotic Fragrance
                              <Badge
                                className="ml-[6px] px-[10px] text-center  font-medium py-[2px]"
                                pill
                                bg="danger"
                              >
                                new
                              </Badge>
                            </NavDropdown.Item>
                          </div>
                        </div>
                      </section>
                      <div className="h-[1px] bg-[#e5e7eb] -ml-[20px] max-xl:hidden"></div>
                      <section className="max-xl:hidden ">
                        <div className="flex items-center  py-[15px] pl-[1100px]">
                          <p className="text-danger flex">
                            Summer Sale 65% Off
                            <span
                              className="hover:translate-x-2 duration-300 ease-in-out"
                              onClick={() => setDemo(false)}
                            >
                              <NavLink
                                to="shopnow"
                                className="text-muted ml-3 add "
                              >
                                Shop Now
                              </NavLink>
                            </span>
                          </p>
                        </div>
                      </section>
                      <div className="h-[1px] bg-[#e5e7eb]  -ml-[20px]  max-xl:hidden"></div>
                    </div>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <div className="flex justify-between items-center max-xl:w-full gap-2 mx-2 drop text-dark max-xl:pb-2 max-[1200px]:border-b-[1px] max-xl:px-0">
                        Product
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-3 h-5 arrow"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    show={product}
                    onMouseEnter={productDropdown}
                    onMouseLeave={ProductDropdown}
                  >
                    <div className="center -ml-[300px] -mt-[6px] absolute bg-white max-xl:p-0 max-xl:ms-0  max-xl:relative">
                      <div className="h-[1px] bg-[#e5e7eb]  max-xl:hidden"></div>
                      <section className=" ms-[400px] pr-[230px] justify-center  item-center max-xl:m-0 max-xl:w-auto flex max-xl:block leading-8 max-xl:leading-6">
                        <section className="flex max-xl:block">
                          <div className="max-xl:hidden">
                            <div className="pt-[50px] pb-[40px] pr-[10px] ">
                              <img
                                width="242px"
                                height="340px"
                                src={Product1}
                                alt="hover-image-3rd"
                                loading="lazy"
                              />
                              <div className="pt-[20px] leading-6">
                                <p className="text-[14px]">
                                  Each product has a number for <br /> easy
                                  indentification.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="max-xl:hidden">
                            <div className="pt-[50px] pb-[40px] pl-[10px]">
                              <img
                                width="242px"
                                height="340px"
                                src={Product2}
                                alt="hover-image-3rd"
                                loading="lazy"
                              />
                              <div className="pt-[20px] leading-6">
                                <p className="text-[14px] pb-[20px]">
                                  It's just a product of your fevered <br />
                                  imagination!
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="py-[50px] pl-[70px] pr-[1px] max-xl:p-0">
                            <div className="pt-[3px] pb-[32px] ml-2 max-xl:hidden">
                              <img
                                width="43px"
                                height="43px"
                                src={Dress}
                                alt=""
                              />
                            </div>
                            <p className="font-bold text-[18px] py-[8px] bg-transparent max-xl:w-max">
                              Product Styles
                            </p>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Style One
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Style Two
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Style Three
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px]  py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Style Four
                            </NavDropdown.Item>
                          </div>
                          <div className="bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden"></div>
                          <div className="py-[50px] pl-[50px] pr-[1px] max-xl:p-0">
                            <div className="pt-[3px] pb-[32px] ml-2 max-xl:hidden">
                              <img
                                width="48px"
                                height="48px"
                                src={SchoolBag}
                                alt=""
                              />
                            </div>
                            <p className="font-bold text-[18px] py-[8px] bg-transparent max-xl:w-max">
                              Product Gallery
                            </p>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Vertical Carousel
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Carousel
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Horizontal Style
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px]  py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Grid Style
                            </NavDropdown.Item>
                          </div>
                          <div className="bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden"></div>
                          <div className="py-[50px] pl-[50px] pr-[1px] max-xl:p-0">
                            <div className="pt-[3px] pb-[32px] ml-2 max-xl:hidden">
                              <img
                                width="48px"
                                height="48px"
                                src={Chair}
                                alt=""
                              />
                            </div>
                            <p className="font-bold text-[18px] py-[8px] bg-transparent max-xl:w-max">
                              Product Style
                            </p>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Simple Product
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setProduct(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Variable Product
                            </NavDropdown.Item>
                          </div>
                        </section>
                      </section>
                      <div className="h-[1px] bg-[#e5e7eb]  max-xl:hidden"></div>
                      <section className="mr-[200px] max-xl:hidden">
                        <div className="flex justify-center items-center py-[15px] pl-[1000px] ">
                          <p className="text-danger flex ">
                            Summer Sale 65% Off
                            <span
                              className="hover:translate-x-2 duration-300 ease-in-out "
                              onClick={() => setProduct(false)}
                            >
                              <NavLink
                                to="shopnow"
                                className="text-muted ml-3 add text-center"
                              >
                                Shop Now
                              </NavLink>
                            </span>
                          </p>
                        </div>
                      </section>
                      <div className="h-[1px] bg-[#e5e7eb]  max-xl:hidden"></div>
                    </div>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <div className="flex justify-between items-center max-xl:w-full gap-2 mx-2 drop text-dark max-xl:pb-2  max-[1200px]:border-b-[1px] max-xl:px-0">
                        Shop
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-3 h-5 arrow"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    show={shop}
                    onMouseEnter={shopDropdown}
                    onMouseLeave={ShopDropdown}
                  >
                    <div className="center -ml-[420px] -mt-[6px] absolute bg-white max-xl:p-0 max-xl:ms-0  max-xl:relative">
                      <div className="h-[1px] bg-[#e5e7eb] w-[1950px] max-xl:hidden"></div>
                      <section className="ms-[400px] pr-[235px] justify-center max-xl:m-0 max-xl:p-0 max-xl:w-auto flex max-xl:block leading-8 max-xl:leading-6">
                        <section className="flex max-xl:block max-xl:p-0">
                          <div className="pt-[60px] pb-[50px] max-xl:p-0">
                            <p className="font-bold text-[18px] py-[8px] bg-transparent">
                              Listing Layouts
                            </p>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              4 Column
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              4 Column + Side bar
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              5 Column
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              5 Column + Side bar
                            </NavDropdown.Item>
                            <div className="mt-[20px]">
                              <p className="font-bold text-[18px] py-[8px] bg-transparent">
                                Shop Pages
                              </p>
                              <div
                                onClick={() => setShop(false)}
                                className="text-muted text-[17px] pl-[15px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                              >
                                <NavLink to="/wishlist">Wishlist</NavLink>
                              </div>
                              <div
                                onClick={() => setShop(false)}
                                className="text-muted text-[17px] pl-[15px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                              >
                                <NavLink to="/cart">Cart</NavLink>
                              </div>
                              <div
                                onClick={() => setShop(false)}
                                className="text-muted text-[17px] pl-[15px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                              >
                                <NavLink to="/checkout">Checkout</NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden"></div>
                          <div className="pl-[40px] pt-[60px] pb-[50px] max-xl:p-0">
                            <p className="font-bold text-[18px] py-[8px] bg-transparent">
                              Sidebar Widgets
                            </p>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Product Filter at Top
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Product Filter at Left
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Product Filter at Right
                            </NavDropdown.Item>
                          </div>
                          <div className="bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden"></div>
                          <div className="pl-[40px] pt-[60px] pb-[50px] max-xl:p-0">
                            <p className="font-bold text-[18px] py-[8px] bg-transparent">
                              Shop Box Styles
                            </p>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[18px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Shop Style One
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[18px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Shop Style Two
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[18px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Shop Style Three
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              onClick={() => setShop(false)}
                              className="text-muted text-[18px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            >
                              Shop Style Four
                            </NavDropdown.Item>
                          </div>
                          <div className="bg-[#e5e7eb] w-[1px] ml-10 max-xl:hidden"></div>
                          <div className="max-xl:hidden ml-[50px] my-[60px] ">
                            <div className="relative">
                              <img
                                width="356px"
                                height="450px"
                                src={Shop}
                                alt=""
                              />
                              <div className="text-[30px] absolute text-white -my-[225px] ml-[40px] tracking-wider">
                                <p>On The Weekend</p>
                              </div>
                            </div>
                          </div>
                        </section>
                      </section>
                      <div className="h-[1px] bg-[#e5e7eb]   max-xl:hidden"></div>
                      <section className="mr-[200px] max-xl:hidden">
                        <div className="flex justify-center items-center py-[15px]">
                          <p className="text-danger flex">
                            Summer Sale 65% Off
                            <span
                              className="hover:translate-x-2 duration-300 ease-in-out"
                              onClick={() => setShop(false)}
                            >
                              <NavLink
                                to="shopnow"
                                className="text-muted ml-3 add text-center"
                              >
                                Shop Now
                              </NavLink>
                            </span>
                          </p>
                        </div>
                      </section>
                      <div className="h-[1px] bg-[#e5e7eb]  max-xl:hidden"></div>
                    </div>
                  </NavDropdown>

                  <div className="flex max-[1200px]:block">
                    <NavDropdown
                      title={
                        <div className="flex justify-between items-center max-xl:w-full drop mx-2 gap-2 text-dark max-xl:pb-2 max-[1200px]:border-b-[1px] max-xl:px-0  ">
                          Blog
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-3 h-5 arrow"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </div>
                      }
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      show={blog}
                      onMouseEnter={blogDropdown}
                      onMouseLeave={BlogDropdown}
                    >
                      <div className="overflow-hidden pr-[100px] py-[10px] max-xl:-ml-6 border-[1px] border-[#e5e7eb] max-xl:border-0 bg-white">
                        <div className="w-36 max-2xl:w-auto">
                          <NavDropdown.Item
                            onClick={() => setBlog(false)}
                            className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                          >
                            Default Blog
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            onClick={() => setBlog(false)}
                            className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                          >
                            Blog One
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            onClick={() => setBlog(false)}
                            className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                          >
                            Blog Two
                          </NavDropdown.Item>
                          <div
                            className="text-muted  text-[17px] pl-[15px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                            id="hide"
                            onClick={() => setBlog(false)}
                          >
                            <NavLink to="blogthree">Blog Three</NavLink>
                          </div>
                        </div>
                      </div>
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <div className="flex justify-between items-center max-xl:w-full gap-2 mx-2 drop text-dark max-xl:pb-2 max-[1200px]:border-b-[1px] max-xl:px-0">
                          Contact
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-3 h-5 arrow"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </div>
                      }
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      show={contact}
                      onMouseEnter={contactDropdown}
                      onMouseLeave={ContactDropdown}
                    >
                      <div className="overflow-hidden  pr-[50px] py-[10px] max-xl:-ml-6 border-[1px] border-[#e5e7eb] max-xl:border-0 bg-white">
                        <div className="w-56 max-2xl:w-auto">
                          <NavDropdown.Item
                            onClick={() => setContact(false)}
                            className="text-muted text-[17px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                          >
                            Contact One
                          </NavDropdown.Item>
                          <div
                            onClick={() => setContact(false)}
                            className="text-muted text-[17px] pl-[15px] py-[8px] add hover:translate-x-2 duration-300 ease-in-out"
                          >
                            <NavLink to="contacttwo">Contact Two</NavLink>
                          </div>
                        </div>
                      </div>
                    </NavDropdown>
                    <NavLink to="wishlist">
                      <div className="flex justify-between pl-2 mt-2 xl:hidden">
                        <p className="">Wishlist</p>
                        <div className="flex">
                          <span className="wishlist_products_counter_text">
                            <img
                              src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/heart-wishlist-icon.svg"
                              className=""
                            />
                          </span>
                          <span className="-mt-3 ml-1 text-black">
                            {WishList.length}
                          </span>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <nav className="flex items-center pr-[20px] order-3">
              <div className="max-xl:hidden pr-[15px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div className="menu-mobile-icon cart-icon flex items-center  justify-center pr-[20px] max-md:pr-3 max-lg:block">
                <p className="mr-2 max-lg:hidden">
                  {isAuthenticated && (
                    <span className="font-[500]">{user.nickname}</span>
                  )}
                </p>
                {isAuthenticated ? (
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    <MdLogout className="w-[22px] h-[22px] relative max-lg:top-[3px]" />
                  </button>
                ) : (
                  <button onClick={() => loginWithRedirect()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="hover:scale-110"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </button>
                )}
              </div>
              <div className="max-xl:hidden">
                <NavLink to="wishlist">
                  <div className="flex  pr-[20px]">
                    <span className="wishlist_products_counter_text">
                      <img
                        src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/heart-wishlist-icon.svg"
                      />
                    </span>
                    <span className="-mt-3 ml-[1px] text-black">{WishList.length}</span>
                  </div>
                </NavLink>
              </div>

              <div className="menu-mobile-icon cart-icon flex max-md:-mr-4">
                <NavLink to="cart">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span className="-mt-3 ml-[1px]">{result.length}</span>
                  </div>
                </NavLink>
              </div>
            </nav>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;
