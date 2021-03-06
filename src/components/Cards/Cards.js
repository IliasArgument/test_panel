import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Cards.css";

const Cards = ({ items, count }) => {
  return (
    <div className="Cards">
      <Card className="Card">
        <CardContent>
          <Typography className="title" color="textSecondary" gutterBottom>
            Карта {count + 1}
          </Typography>
          <Typography variant="h5" component="h2" className="Cards_item">
            <span className="item_title">Name:</span>{" "}
            <span className="item"> {items.name}</span>
          </Typography>
          <Typography variant="h5" component="h2" className="Cards_item">
            <span className="item_title">Last Name:</span>{" "}
            <span className="item"> {items.lastname}</span>
          </Typography>
          <Typography variant="h5" component="h2" className="Cards_item">
            <span className="item_title">Age:</span>{" "}
            <span className="item"> {items.age}</span>
          </Typography>
          <Typography variant="h5" component="h2" className="Cards_item">
            <span className="item_title">Sex:</span>{" "}
            <span className="item"> {items.sex}</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
