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
import DishDetail from "./DishDetailComponent";
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders
});

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      return(
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter(promo => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return(
        <DishDetail
          dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path="/about" component={() => <About leaders={this.props.leaders.leaders} />} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes.dishes} />} />
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
