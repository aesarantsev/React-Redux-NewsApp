import React from "react";

import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";

import { Article } from "../../entities/Article";
import { ISOdateToUIformat } from "../../utils/date-service";

import "./article-list-item.css";
interface IArticleListItemProps {
  article: Article;
}
const useStyles = makeStyles({
  root: {
    maxWidth: 845,
    marginBottom: 50
  },
  media: {}
});

const ArticleListItem = ({ article }: IArticleListItemProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={article.urlToImage}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            {ISOdateToUIformat(article.publishedAt)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleListItem;
