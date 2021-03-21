import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Cards.css";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  item: {
    display: "flex",
    alignItems: "baseline",
  },
});

const Cards = ({ items, count }) => {
  const classes = useStyles();

  return (
    <div className="Card">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Карта {count + 1}
          </Typography>
          <Typography variant="h5" component="h2" className={classes.item}>
            Name: <span className="item"> {items.name}</span>
          </Typography>
          <Typography variant="h5" component="h2" className={classes.item}>
            Last name: <span className="item"> {items.lastname}</span>
          </Typography>
          <Typography variant="h5" component="h2" className={classes.item}>
            Age: <span className="item"> {items.age}</span>
          </Typography>
          <Typography variant="h5" component="h2" className={classes.item}>
            Sex: <span className="item"> {items.sex}</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
