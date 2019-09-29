import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 440,
    // maxHeight: 500,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  console.log(props);
  const property = props.data;
  const img = require(`../../img/${property.main_image}`);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontSize: "2vh"}}>
            {property.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap>
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica */}
            {property.description}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p" noWrap>
            P {property.price}
          </Typography>
          <Typography variant="overline" color="textSecondary" component="p" noWrap>
            {property.city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
