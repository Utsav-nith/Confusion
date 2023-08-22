
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle ,ListGroup,ListGroupItem} from 'reactstrap';
import CommentForm from './CommentForm';

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
      const dishComments = comments.filter(comment => comment.dishId === this.props.dish.id);
      const commentList = comments.map((comment) => {
        
        return (
          
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString()}</p>
          </li>
         
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{commentList}</ul>
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
            <CommentForm />
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
