import React, { Component } from "react";
import { Container, Row, Col, Tooltip } from "reactstrap";
import "../styles/InvoiceBox.css";

export default class InvoiceBox extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <Container>
        <Row className="invoice-first-row">
          <p className="invoice-title">Invoice </p>
          <div>
            <p className="invoice-number" id="numberTooltip">
              {this.props.data.id}
            </p>
            <Tooltip
              placement="top"
              isOpen={this.state.tooltipOpen}
              target="numberTooltip"
              toggle={this.toggle}
            >
              Invoice Number
            </Tooltip>
          </div>
        </Row>
        <Container className="white-box">
          <Row className="border-bottom">
            <p className="revision-title">INVOICE - REVISION</p>
          </Row>
          <Row>
            <Col className="border-right">
              <Container className="margin-top margin-left margin-bottom">
                <Row className="data-row">
                  <p className="category-text">Invoice #</p>
                  <p className="data-text">{this.props.data.number}</p>
                </Row>
                <Row className="data-row">
                  <p className="category-text">Date</p>
                  <p className="data-text">{this.props.data.date}</p>
                </Row>
                <Row className="data-row">
                  <p className="category-text">Due Date</p>
                  <p className="data-text">{this.props.data.dueDate}</p>
                </Row>
                <Row className="data-row">
                  <p className="category-text">Terms</p>
                  <p className="data-text">{this.props.data.terms}</p>
                </Row>
              </Container>
            </Col>
            <Col xs="6">
              <Row>
                <p className="revision-title">Bill To</p>
              </Row>
            </Col>
            <Col className="border-left">
              <Row>
                <p className="revision-title">New Balance upon Re-booking</p>
              </Row>
              <Row>
                <p className="revision-title big-orange-text">
                  $ {this.props.data.balance.toString()}
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
