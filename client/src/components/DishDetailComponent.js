
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends React.Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments != null) {
      const commentList = comments.map((comment) => {
        return (
          <ListGroupItem key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString()}</p>
          </ListGroupItem>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <ListGroup>{commentList}</ListGroup>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const { dish } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(dish && dish.comments)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
