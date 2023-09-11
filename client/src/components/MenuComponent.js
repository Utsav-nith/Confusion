import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom"
import Loading from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function Menu(props) {
  const menu = props.dishes.map((item, index) => {
    return (
      <div className="col-12 col-md-5 m-1" key={index} >
        <Card>
          <Link to={`/menu/${item.id}`}>
            <CardImg width="200px" src={baseUrl + item.image} alt={item.name} />
            <CardImgOverlay>
              <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    )
  });

  if (props.isLoading) {
    return <Loading />
  } else if (props.errMess) {
    return <h4>{props.errMess}</h4>
  } else {

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
      </div>
    )
  }
}


export default Menu;
