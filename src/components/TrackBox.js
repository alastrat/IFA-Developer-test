import React, { Component } from "react";

import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";

import { FaIndustry } from "react-icons/fa";

import "../styles/TrackBox.css";

export default class TrackBox extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      toggleOn: true
    };
  }
  toggle() {
    this.setState({
      toggleOn: !this.state.toggleOn
    });
  }

  render() {
    const whiteBtn = {
      "background-color": "white",
      color: "#000000",
      "font-weight": "bold"
    };

    const diagram = (
      <Row className="circles-container">
        <div className="circle-icon">
          <FaIndustry size="1.5em" />
        </div>
        <div className="circle-icon">
          <FaIndustry size="1.5em" />
        </div>
        <div className="circle-icon">
          <FaIndustry size="1.5em" />
        </div>
        <div className="circle-icon">
          <FaIndustry size="1.5em" />
        </div>
        <div className="circle-icon">
          <FaIndustry size="1.5em" />
        </div>
        <div className="circle-icon">
          <FaIndustry size="1.5em" />
        </div>
        <div className="circle-icon">
          <FaIndustry size="1.5em" />
        </div>
      </Row>
    );

    const map = (
      <img
        src={require("../old-map.jpg")}
        alt="static image of a map"
        className="map"
      />
    );
    return (
      <Container className="margin-top">
        <Row className="top-row">
          <ButtonGroup>
            <Button
              outline
              size="sm"
              style={this.state.toggleOn ? whiteBtn : {}}
              onClick={this.toggle}
              disabled={this.state.toggleOn}
            >
              Diagram
            </Button>
            <Button
              outline
              size="sm"
              style={!this.state.toggleOn ? whiteBtn : {}}
              onClick={this.toggle}
              disabled={!this.state.toggleOn}
            >
              Map
            </Button>
          </ButtonGroup>
        </Row>
        <Row className="center-row">
          <p className="title-text">Text</p>
        </Row>
        <Container className="white-box">
          {this.state.toggleOn ? diagram : map}
        </Container>
      </Container>
    );
  }
}
