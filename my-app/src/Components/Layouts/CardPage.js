import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import axios from "axios";
import Ytdl from "./Cards/ytdl";
class Cardpage extends React.Component {
  state = {
    posts: []
  };

  render() {
    var id = this.props.info;
    console.log(id);
    if (id == "F18 Application") {
      return (
        <Card style={{ width: "100%" }}>
          <Card.Img
            variant="top"
            src="https://www.extremetech.com/wp-content/uploads/2013/01/YB49-2_300.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div>
              <ul>
                {this.state.posts.map(post => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      );
    } else return <Ytdl />;
  }
}

export default Cardpage;
