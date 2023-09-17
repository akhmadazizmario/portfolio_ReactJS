import "./sertif.css";
import { Container, Row, Col } from "reactstrap";

// import img01 from "../../assets/gambar/project1.png";
import img02 from "../../assets/gambar/sertif02.png";
import img03 from "../../assets/gambar/sertif03.png";

const sertifData = [
  {
    imgUrl:
      "https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    title: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/ea327c05-6dbb-49e5-87c2-a5b78e7ddf32/public_url",
  },
  {
    imgUrl: img02,
    title: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/ea327c05-6dbb-49e5-87c2-a5b78e7ddf32/public_url",
  },
  {
    imgUrl: img03,
    title: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/ea327c05-6dbb-49e5-87c2-a5b78e7ddf32/public_url",
  },
];

function Sertif() {
  return (
    <section id="sertif">
      <Container>
        <Row>
          <Col lg="12" className="sertif_top mb-5">
            <h5>Explore my Acievement</h5>
            <h2>Sertifikat</h2>
          </Col>
          {sertifData.map((item, index) => (
            <Col lg="4" md="6" sm="6" className="" key={index}>
              <div className="sertif_card mb-3">
                <div className="sertif_img">
                  <img src={item.imgUrl} alt="Certificate" className="w-100" />
                </div>

                <div className="sertif_content">
                  <h5>{item.title}</h5>
                  <a href={item.url} className="btn btn-dark text-dark">
                    view
                  </a>
                </div>
              </div>
            </Col>
          ))}

          <a href="https://www.linkedin.com/in/akhmadazizmario" className="mt-5 text-light">Lihat lainnya di LinkedIN saya</a>
        </Row>
      </Container>
    </section>
  );
}

export default Sertif;
