import { Container } from "reactstrap";
import { useRef, useEffect } from "react";
import "./header.css";
import LogoImg from "../../assets/gambar/logo.png";

function Header() {
  const navLinks = [
    {
      display: "Home",
      url: "#home",
    },
    {
      display: "About",
      url: "#about",
    },
    {
      display: "Experience",
      url: "#services",
    },
    {
      display: "Portfolio",
      url: "#portfolio",
    },
    {
      display: "Contact",
      url: "#contact",
    },
  ];

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 70,
    });
  };

  const menuRef = useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle("menu_active");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>
              <img src={LogoImg} className="logoku"></img>
            </h5>
          </div>

          <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav_list">
              {navLinks.map((item, index) => (
                <li className="nav_item" key={index}>
                  <a href={item.url} onClick={handleClick}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-right d-flex align-items-center gap-4">
            <button className="btn">
              <a href="https://t.me/azizmario">Lets Talk</a>
              <i className="ri-message-fill"></i>
            </button>
            <span className="mobile_menu">
              <i className="ri-menu-5-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
