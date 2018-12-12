import React, { Component } from "react";

import { Container, Row } from "reactstrap";

import CustomNavbar from "./components/CustomNavbar";
import InvoiceBox from "./components/InvoiceBox";
import "./App.css";
import TrackBox from "./components/TrackBox";
import Overview from "./components/Overview";

class App extends Component {
  render() {
    const invoiceData = {
      id: "S03834754",
      number: "33-0092kk00",
      date: "7/31/18",
      dueDate: "7/31/18",
      terms: "Net 0",
      balance: 452.45,
      status: "Active",
      method: "Multimodal",
      capacity: "LCL",
      drayage: "Pickup, Delivery",
      icoterms: "FOB",
      serviceOptions: "Deconsolidation, Customs Clearance",
      hazard: "Lithium Batteries, Hazmat, Other"
    };

    return (
      <div className="App">
        <CustomNavbar />
        <Container className="app-body">
          <Row>
            <InvoiceBox data={invoiceData} />
          </Row>
          <Row>
            <TrackBox data={invoiceData} />
          </Row>
          <Row>
            <Overview data={invoiceData} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
