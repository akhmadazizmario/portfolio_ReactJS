import "./herosection.css";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../../assets/gambar/profil.jpg";

import { useEffect } from "react";
// import { init } from 'ityped';

function HeroSection() {
  // const textRef = useRef();
  useEffect(() => {
    const positions = [
      "Junior Web Developer",
      "Software Engineer",
      "Programmer",
      "UI/UX Design",
      "Cloud AWS Basic",
      "IT Enthusiast",
    ];
    let index = 0;
    const textElement = document.querySelector(".typed-text");

    function typeNextPosition() {
      textElement.textContent = positions[index];
      index = (index + 1) % positions.length;
      setTimeout(typeNextPosition, 1500); // Waktu delay antara pergantian posisi
    }
    typeNextPosition();
  }, []);

  return (
    <section className="hero_section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <p className="mb-3">Welcome to my portfolio</p>
              <h2 className="hero_title mb-4">AKHMAD AZIZ MARIO</h2>
              <h4>
                I^m <span className="typed-text gelar"></span>
              </h4>
              {/* typed text gelar mengarah ke jquery diatas */}
              <p>
                enjoy in my website, situs web ini adalah tentang apa yang telah
                saya pelajari dan saya lakukan akhir-akhir ini. yaps ini adalah
                website portofolio dan project saya. <br />
                <br /> Portfolio ini saya buat dengan menggunakan{" "}
                <strong>React JS x Vite</strong> -{" "}
                <a
                  href="https://github.com/akhmadazizmario/portfolio_ReactJS.git"
                  className="linksport"
                >
                  Github Portfolioku React
                </a>{" "}
              </p>

              <div className="mt-5 hero_btns d-flex align-items-center gap-4">
                <button className="btn hire_btn">
                  <a
                    href="mailto:akhmadazizmario@gmail.com"
                    className="text-dark"
                  >
                    {" "}
                    Hire Me{" "}
                  </a>{" "}
                  <i className="ri-mail-send-fill"></i>
                </button>
                <button className="btn cv_btn">
                  <a
                    href="https://drive.google.com/file/d/1NtmKLaJIlAIgpD-iXaQbMetPy3iJOCiY/view?usp=drive_link"
                    className="text-white"
                  >
                    {" "}
                    Checkout my CV <i className="ri-send-plane-fill"></i>
                  </a>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="5" md="6">
            <div className="hero_img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
