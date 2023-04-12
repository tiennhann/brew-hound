import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/beerMug.png";
import icon1 from "../assets/img/nav-icon1.svg";
import icon2 from "../assets/img/nav-icon2.svg";
import icon3 from "../assets/img/nav-icon3.svg";
import "../styles/Footer.css";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={icon1} alt="Icon" /></a>
              <a href="#"><img src={icon2} alt="Icon" /></a>
              <a href="#"><img src={icon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Buisness</h4>
                        <a href="https://computerscience.nmsu.edu/facultydirectory/computer-operations-group.html" target = "_blank" rel="noreferrer">
                            <p>CS Organizations</p>
                        </a>
                        <a href="https://computerscience.nmsu.edu/facultydirectory/faculty-staff-directory.html" target = "_blank" rel="noreferrer">
                            <p>NMSU CS Faculty</p>
                        </a>
                        <a href="https://computerscience.nmsu.edu/outreach/outreach-programs.html" target = "_blank" rel="noreferrer">
                            <p>Outreach Programs</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>About Us</p>
                        </a>
                        <a href="https://www.bjcp.org/" target = "_blank" rel="noreferrer">
                            <p>BJCP Documentation</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Collaborators</h4>
                        <a href="https://computerscience.nmsu.edu/" target = "_blank" rel="noreferrer">
                            <p>NMSU Computer Science</p>
                        </a>
                        <a href="https://www.cs.unm.edu/" target = "_blank" rel="noreferrer">
                            <p>UNM Computer Science</p>
                        </a>
                    </div>
                    </div>
                    </div>
            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} BrewHound. All right reserved.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
    </footer>
  )
}