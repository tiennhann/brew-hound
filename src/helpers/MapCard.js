import { Col } from "react-bootstrap";

export const MapCard = ({ title, description }) => {
  return (
    <Col size={12} sm={50} md={50}>
        <div className="bot-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      
    </Col>
  )
}