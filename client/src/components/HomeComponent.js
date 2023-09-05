import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const RenderCard = ({ item }) => {
  return (
    <Card>
      {/* <CardImg src={item.image} alt={item.name} className="render-card-img" /> */}
      <img src={item.image} alt={item.name} width={100} height={100} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : (null)}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  )
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} />
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>

    </div>
  )
}

export default Home;