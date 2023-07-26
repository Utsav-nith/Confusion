import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
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
        <div className="col-12 col-md-5 m-1" key={index} >
          <Card onClick={() => this.onClickHandler(item)}>
          <CardImg width="200px" src={item.image} alt={item.name} />
            <CardImgOverlay>
              <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
            {menu}
        </div>
        <DishDetail dish={this.state.selectedDish} />
      </div>
    )
  }
}

export default Menu;
