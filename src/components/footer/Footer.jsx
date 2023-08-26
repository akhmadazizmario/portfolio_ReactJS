import "./footer.css";
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="pb-4">
      <Container className="text-center footer">
        <p>
          Copyright {new Date().getFullYear()}, Developed by Aziz Mario. All
          Rights Reserved
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
