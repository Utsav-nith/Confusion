import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent'; // Import the Loading component

function Menu(props) {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg width="200px" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">{menu}</div>
        {props.selectedDish && <DishDetail dish={props.selectedDish} />}
      </div>
    );
  }
}

export default Menu;