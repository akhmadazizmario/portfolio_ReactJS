import "./services.css";
import { Container, Row, Col } from "reactstrap";

const developmentExperienceData = [
  {
    year: "July 2023 - September 2023",
    inst: "Orbit Future Academy - indonesia",
    title: "AWS Re/Start Batch 6 Program",
    desc: "training",
  },
  {
    year: "July 2023 - Agustus 2023",
    inst: "Fundex x Rakamin Academy - indonesia",
    title: "Project-Based Virtual Intern: UI/UX Designer",
    desc: "internship",
  },
  {
    year: "Agustus 2022 - Desember 2022",
    inst: "PT. Chairos International Ventures",
    title: "Cloud Computing",
    desc: "Magang MSIB Kampus Merdeka / MBKM",
  },
  {
    year: "Agustus 2022 - November 2022",
    inst: "Ponpes Riyadush Sholihin Tegal",
    title: "Web Developer",
    desc: "Sukarela",
  },
];

const developmentTrainingData = [
  {
    year: "Maret 2023 - Mei 2023",
    inst: "Kominfo Digitalent - indonesia",
    title: "Become an AWS Cloud Engineer",
    desc: "training",
  },
  {
    year: "mei 2022",
    inst: "Kominfo digitalent",
    title: "VSGA Junior Web Development",
    desc: 'training',
  },
];

function Experience() {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Experience & Training</h2>
          </Col>

          <Col lg="6" md="6">
            <div className="single_experience-container gap-5">
              <p>Pengalaman</p>
              {developmentExperienceData.map((item, index) => (
                <div className="single_experience" key={index}>
                  <span className="experience_icon">
                    <i className="ri-briefcase-line"></i>
                  </span>
                  <h6>{item.year}</h6>
                  <h4>{item.inst}</h4>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="single_experience-container mt-3">
              
              {developmentTrainingData.map((item, index) => (
                <div className="single_experience" key={index}>
                  <span className="experience_icon">
                    <i className="ri-macbook-line"></i>
                  </span>
                  <h6>{item.year}</h6>
                  <h4>{item.inst}</h4>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
