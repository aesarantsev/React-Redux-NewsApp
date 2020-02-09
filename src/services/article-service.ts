import { Article } from "../entities/Article";

export default class ArticleService {
  apiKey = "337740f995084865b5466d83875c9613";
  currentDate = "2020-01-09";

  async getResource(query: string, pageSize: number = 5, page: number = 1) {
    let apiURL = `https://newsapi.org/v2/everything?q=${query}&from=${this.currentDate}&sortBy=publishedAt&apiKey=${this.apiKey}&pageSize=${pageSize}&page=${page}`;
    console.log(`fetch ${apiURL}`);
    const res = await fetch(apiURL);
    if (!res.ok) {
      throw new Error(`Could not ferch ${apiURL}` + `, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  getArticles = async (query: string, pageSize: number, page: number) => {
    const res = await this.getResource(query, pageSize, page);
    return res.articles.map(this._transformArticles);
  };

  _transformArticles = (article: any): Article => {
    return {
      title: article.title,
      description: article.description,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt
    };
  };
}
