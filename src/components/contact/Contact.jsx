import { Container, Col, Row } from "reactstrap";
import "./contact.css";

import Formkul from "../form/Formkul";

function Contact() {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Get in Contact Me</h2>
          </Col>

          <Col lg="6" md="6">
            <div className="contact_info-container d-flex align-items-center gap-5">
              <div className="single_info-box w-50">
                <h6>Address</h6>
                <p>Tegal, Jawa Tengah</p>
              </div>

              <div className="single_info-box w-50">
                <h6>No HP</h6>
                <p>0895378979888</p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Formkul />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
