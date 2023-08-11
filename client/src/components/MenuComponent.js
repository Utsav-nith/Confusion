import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import {Link} from "react-router-dom"

function Menu(props){
    const menu = props.dishes.map((item, index) => {
      return (
        <div className="col-12 col-md-5 m-1" key={index} >
         <Card>
          <Link to ={`/menu/${item.id}`}>
          <CardImg width="200px" src={item.image} alt={item.name} />
            <CardImgOverlay>
              <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
            </Link>
          </Card>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
            {menu}
        </div>
        {props.selectedDish && <DishDetail dish={props.selectedDish} />}
      </div>
    )
  }


export default Menu;
