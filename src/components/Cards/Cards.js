import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Cards.css";

const useStyles = makeStyles({

  title: {
    fontSize: 14,
  },

  item: {
    display: "flex",
    alignItems: "baseline",
  },
});

const Cards = ({ items, count }) => {
  const classes = useStyles();

  return (
    <div className="Cards">
      <Card className="Card">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Карта {count + 1}
          </Typography>
          <Typography variant="h5" component="h2" className="Cards_item">
            <span className="item_title">Name:</span> <span className="item"> {items.name}</span>
          </Typography>
          <Typography variant="h5" component="h2" className="Cards_item">
          <span className="item_title">Last Name:</span> <span className="item"> {items.lastname}</span>
          </Typography>
          <Typography variant="h5" component="h2" className="Cards_item">
          <span className="item_title">Age:</span> <span className="item"> {items.age}</span>
          </Typography>
          <Typography variant="h5" component="h2" className="Cards_item">
          <span className="item_title">Sex:</span> <span className="item"> {items.sex}</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
