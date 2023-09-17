import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent'; // Import the Loading component
import { baseUrl } from '../shared/baseUrl'; // Import baseUrl

function Menu(props) {
  const menu = props.dishes.dishes.map((item, index) => {
    return (
      <div className="col-12 col-md-5 m-1" key={index} >
        <Card>
          <Link to={`/menu/${item.id}`}>
          <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
            <CardImgOverlay>
              <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    )
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
        <div className="row">
          {menu}
        </div>
        {props.selectedDish && <DishDetail dish={props.selectedDish} />}
      </div>
    );
  }
}

export default Menu;