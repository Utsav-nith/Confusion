import React, { Component } from "react";
import { Media } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(dish) {
    this.setState({
      selectedDish: dish
    })
  }

  render() {
    const menu = this.props.data.map((item, index) => {
      return (
        <div className="col-12 mt-5" key={index} onClick={() => this.onClickHandler(item)}>
          <Media tag="li">
            <Media left>
              <Media object src={item.image} alt={item.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{item.name}</Media>
              <p>{item.description}</p>
            </Media>
          </Media>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
          <Media list>
            {menu}
          </Media>
        </div>
        <DishDetail dish={this.state.selectedDish} />
      </div>
    )
  }
}

export default Menu;
/*
<Card>
          <CardImg src={dish.image} alt={dish.name} top />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>*/