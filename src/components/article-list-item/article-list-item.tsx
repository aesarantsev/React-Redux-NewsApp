import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";

import { Article } from "../../entities/Article";
import { ISOdateToUIformat } from "../../utils/date-service";

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
        <Link
          to={process.env.PUBLIC_URL + `/articles/${article.id}`}
          style={{ textDecoration: "none", color: "initial" }}
        >
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
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default ArticleListItem;
