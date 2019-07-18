import React from "react";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import CardPage from "./CardPage";
import "bootstrap/dist/css/bootstrap.min.css";

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    var removeWidgetByID = this.props.removeWidgetByID;
    // console.log("In Widget: " + this.props.title);
    return (
      <Toast
        style={{ width: "100%", height: "100%", position: "relative" }}
        onClose={() => removeWidgetByID(this.props.title)}
        dismissible="true"
      >
        <Toast.Header>
          <strong className="mr-auto">{this.props.title}</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>
          <CardPage info={this.props.title} />
        </Toast.Body>
      </Toast>
    );
  }
}

export default Widget;
