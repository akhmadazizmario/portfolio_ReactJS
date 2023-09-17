import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";

import img01 from "../../assets/gambar/project1.png";
import img02 from "../../assets/gambar/project2.png";
import img03 from "../../assets/gambar/project3.png";
import img04 from "../../assets/gambar/project4.png";
import img05 from "../../assets/gambar/project5.png";
import img06 from "../../assets/gambar/project6.png";
import img07 from "../../assets/gambar/project7.png";
import img08 from "../../assets/gambar/project8.png";
import img09 from "../../assets/gambar/uiuxd.png"

const portfolioData = [
  {
    imgUrl: img09,
    title:
      "Redesign web Fundex , project based Rakamin Academy",
    url: "https://www.figma.com/proto/PX4oS8HeoaMw753HaCZupN/Wireframe?type=design&node-id=1-1031&t=asNmIa7TRUyVevOi-0&scaling=scale-down&page-id=1%3A3",
  },
  {
    imgUrl: img01,
    title:
      "Aplikasi Sistem Informasi Pendaftaran Siswa Baru SDN Mejasem Barat 01",
    url: "https://drive.google.com/file/d/18ZDVo4_wOJyrWSZAKd9DqPVZuXaZqb9n/view?usp=drive_link",
  },
  {
    imgUrl: img02,
    title: "Arsitektur Diagram Cloud AWS",
    url: "https://drive.google.com/file/d/1dQkjeccfFCABTIdrIQSfK-vc_nhgODp9/view?usp=drive_link",
  },
  {
    imgUrl: img03,
    title: "News App Based On Cloud",
    url: "https://drive.google.com/file/d/1dQkjeccfFCABTIdrIQSfK-vc_nhgODp9/view?usp=drive_link",
  },
  {
    imgUrl: img04,
    title: "Open Music API",
    url: "https://github.com/akhmadazizmario/OpenMusicV3_API-NodeJs.git",
  },
  {
    imgUrl: img05,
    title: "Company Profile Landing Page",
    url: "https://drive.google.com/file/d/1YlftSYhSDO44IpNuBFh2JNFYvMxgvN7T/view?usp=sharing",
  },
  {
    imgUrl: img06,
    title: "App Manjemen Data & Keuangan Ponpes",
    url: "https://drive.google.com/file/d/1FxR19Szy3TdeFaE4U4NnWFZHNAjUCMUR/view?usp=drive_link",
  },
  {
    imgUrl: img07,
    title: "Project Bookshel API Dicoding x DBS Foundations",
    url: "https://drive.google.com/file/d/1ZEy9WN8CZQsYeu-Zq7UgxstqnH3izJbZ/view?usp=drive_link",
  },
  {
    imgUrl: img08,
    title: "Project UAS Aplikasi SPP Sekolah",
    url: "https://github.com/akhmadazizmario/aplikasi-spp-2022.git",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top mb-5">
            <h5>Explore my Project and give a feedback</h5>
            <h2>Portfolio</h2>
          </Col>
          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" className="" key={index}>
              <div className="portfolio_card mb-3">
                <div className="portfolio_img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>

                <div className="portfolio_content">
                  <h5>{item.title}</h5>
                  <a href={item.url} className="btn btn-dark">
                    view
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
