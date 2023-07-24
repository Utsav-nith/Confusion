import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
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
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#">Restaurant COnfusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu data={this.state.dishes} onClickHandler={this.onClickHandler} selectedDish={this.state.selectedDish} />
      </div>
    );
  }
}
export default Main;