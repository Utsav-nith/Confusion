import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/Leaders";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent'
import Contact from "./ContactComponent";
import Home from './HomeComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
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
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home
            dish={this.state.dishes.filter((dish) => dish.featured === true)[0]}
            promotion={this.state.promotions.filter((promotion) => promotion.featured === true)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured === true)[0]} />}
          />
          <Route path="/about" component={() => <About leaders={this.state.leaders} />} />
          <Route path="/menu" component={() =>( <Menu dishes={this.state.dishes} onClickHandler={this.onClickHandler} selectedDish={this.state.selectedDish} />)} />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;