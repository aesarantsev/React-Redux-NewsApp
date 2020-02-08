import * as React from "react";
import { ArticleServiceConsumer } from "../../services/article-service-context";

const withArticleService = (Wrapped: React.FC): React.FC => {
  return (props: any): any => {
    return (
      <ArticleServiceConsumer>
        {articleService => {
          return (
            <Wrapped
              {...props}
              articleService={articleService?.articleService}
            ></Wrapped>
          );
        }}
      </ArticleServiceConsumer>
    );
  };
};

export { withArticleService };
