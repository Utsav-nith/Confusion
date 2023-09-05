import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators'; // Import the necessary actions
import {DISHES} from '../shared/dishes';
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/Leaders";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent'
import Contact from "./ContactComponent";
import Home from './HomeComponent';
import DishDetail from "./DishDetailComponent";

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: (dishId, rating, author, comment) =>
      dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()) // Dispatch the fetchDishes action
  };
};

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
    });
  }

  componentDidMount() {
    this.props.fetchDishes(); // Call the fetchDishes action on component mount
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path="/about" component={() => <About leaders={this.state.leaders} />} />
          <Route exact path="/menu" component={() => (
            <Menu
              dishes={this.props.dishes.dishes}
              onClickHandler={this.onClickHandler}
              selectedDish={this.state.selectedDish}
            />
          )} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));