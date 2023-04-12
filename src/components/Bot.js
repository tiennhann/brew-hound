import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { BeerCard }  from "../helpers/BeerCard";
import botImg from "../assets/img/botImage.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
//import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Bot = () => {

  const bots = [
    {
      title: "Brew Hound Bot",
      description: "Help you find your favorite beer",
      imgUrl: botImg,
    },

  ];

  return (
    <section className="bot" id="bot">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Beer Bot</h2>
                <Tab.Container id="bots-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          bots.map((bot, index) => {
                            return (
                              <BeerCard
                                key={index}
                                {...bot}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>BeerBot.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}