import React from "react";
import { Row, Col } from "antd";
import "./styles.css";

export const Container: React.FC = ({ children }) => {
  return (
    <Row>
      <Col className="container" span={12} offset={6}>
        <div className="container-wrapper">{children}</div>
      </Col>
    </Row>
  );
};

export default Container;
