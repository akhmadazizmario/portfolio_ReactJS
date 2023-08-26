import "./about.css";

import { Container, Row, Col } from "reactstrap";

import aboutImg from "../../assets/gambar/profil.jpg";
import Education from "./Education";
import Skills from "./Skills";
import Award from "./Award";

import { useState } from "react";

function About() {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button
                className={`about_btn ${
                  aboutFilter === "ABOUT" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                {" "}
                About Me{" "}
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "EDUCATION" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                {" "}
                Education{" "}
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "SKILLS" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                {" "}
                Skills{" "}
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "AWARD" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("AWARD")}
              >
                {" "}
                Award{" "}
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter == "ABOUT" && (
              <div className="about_content_wrapper d-flex gap-5">
                <div className="about_img w-25">
                  <img src={aboutImg} alt="img" className="w-100" />
                </div>
                <div className="about_content w-75">
                  <h2>I^m Akhmad Aziz Mario</h2>
                  <p>
                    Fresh Graduate Diploma 3 Jurusan Sistem Informasi di
                    Universitas Bina Sarana Informatika. Seorang yang kreatif,
                    rajin, berkomitmen, dan bertanggung jawab. Memiliki
                    pengalaman Magang di PT Chairos International Ventures
                    posisi Cloud Computing selama 5 Bulan di program MSIB Kampus
                    Merdeka/MBKM. Dan pengalaman di Ponpes Riyadush Sholihin
                    Tegal sebagai Web Developer. Kemampuan yang dikuasai adalah
                    php, html, css, JavaScript, Python, MySQL database, Potsgree
                    SQL, Figma dan AWS Cloud.
                  </p>

                  <div className="social_links">
                    <h6 className="mb-3">Connect with me in Social Media:</h6>
                    <span>
                      <a href="https://web.facebook.com/riio2367/">
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://www.linkedin.com/in/akhmadazizmario/">
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://www.instagram.com/azizmario_/">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://github.com/akhmadazizmario">
                        <i className="ri-github-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {aboutFilter == "EDUCATION" && <Education />}

            {aboutFilter == "SKILLS" && <Skills />}
            {aboutFilter == "AWARD" && <Award />}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
