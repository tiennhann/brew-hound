import { Col } from "react-bootstrap";

export const BeerCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={50} md={50}>
      <div className="bot-imgbx">
        <img src={imgUrl} />
        <div className="bot-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}