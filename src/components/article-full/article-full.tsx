import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { StoreStructure } from "../../entities/StoreStructure";
import { Article } from "../../entities/Article";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 845,
    marginBottom: 50
  },
  media: {}
});

interface ArticleFullType {
  articles: Article[];
}

const ArticleFull = ({ articles }: ArticleFullType) => {
  let { id } = useParams();
  let article = articles.find(item => item.id === id);

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={article?.urlToImage}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {article?.title}
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          component="p"
        ></Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {article?.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = ({
  articleList: { articles }
}: StoreStructure): any => {
  return {
    articles
  };
};

export default connect(mapStateToProps)(ArticleFull);
