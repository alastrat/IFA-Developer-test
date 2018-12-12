import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaCheck } from "react-icons/fa";
import "../App.css";

export default class Overview extends Component {
  render() {
    const check =
      this.props.data.status.toLowerCase() === "active" ? (
        <FaCheck color="lime" />
      ) : (
        <div />
      );
    return (
      <Container className="margin-top margin-bottom">
        <Container className="white-box">
          <Row className="border-bottom">
            <p className="revision-title">OVERVIEW</p>
          </Row>
          <Row>
            <Col className="border-right">
              <Container className="margin-top margin-left margin-bottom">
                <Row className="data-row">
                  <p className="category-text">Status</p>
                  <div className="horizontal-tight">
                    {check}
                    <p
                      className="data-text"
                      style={
                        this.props.data.status.toLowerCase() === "active"
                          ? { color: "lime" }
                          : {}
                      }
                    >
                      {this.props.data.status}
                    </p>
                  </div>
                </Row>
                <Row className="data-row">
                  <p className="category-text">Method</p>
                  <p className="data-text">{this.props.data.method}</p>
                </Row>
                <Row className="data-row">
                  <p className="category-text">Capacity</p>
                  <p className="data-text">{this.props.data.capacity}</p>
                </Row>
                <Row className="data-row">
                  <p className="category-text">Drayage</p>
                  <p className="data-text">{this.props.data.drayage}</p>
                </Row>
              </Container>
            </Col>
            <Col>
              <Container className="margin-top margin-left margin-bottom">
                <Row className="data-row">
                  <p className="category-text">Incoterms</p>
                  <p className="data-text">{this.props.data.drayage}</p>
                </Row>
                <Row className="data-row">
                  <p className="category-text">Service Options</p>
                  <p className="data-text">{this.props.data.serviceOptions}</p>
                </Row>
                <Row className="data-row">
                  <p className="category-text">
                    Hazardous or forbidden commodities
                  </p>
                  <p className="data-text">{this.props.data.hazard}</p>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
