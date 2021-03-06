import { Article } from "../entities/Article";

export default class ArticleService {
  apiKey = "354d6c6676cf477683e5b3651d76321c";
  currentDate = "2020-02-01";

  async getResource(
    query: string,
    pageSize: number = 5,
    page: number = 1,
    from: string,
    to: string
  ) {
    let apiURL = `https://newsapi.org/v2/everything?q=${query}&from=${from}&to=${to}&sortBy=publishedAt&apiKey=${this.apiKey}&pageSize=${pageSize}&page=${page}`;
    console.log(`fetch ${apiURL}`);
    const res = await fetch(apiURL);
    if (!res.ok) {
      throw new Error(`Could not ferch ${apiURL}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  getArticles = async (
    query: string,
    pageSize: number,
    page: number,
    from: string,
    to: string
  ) => {
    const res = await this.getResource(query, pageSize, page, from, to);
    console.log(
      "res.articles.map(this._transformArticles)",
      res.articles.map(this._transformArticles)
    );
    return {
      totalArticles: res.totalResults,
      articles: res.articles.map(this._transformArticles)
    };
  };

  _transformArticles = (article: any): Article => {
    return {
      id:
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9),
      title: article.title,
      description: article.description,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content
    };
  };
}
