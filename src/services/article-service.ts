import { Article } from "../entities/Article";

export default class ArticleService {
  apiKey = "8cb1cd4070ba4b7c81ea4dcbaa198897";
  currentData = "2020-01-08";
  querty = "bitcoin";

  apiURL = `https://newsapi.org/v2/everything?q=${this.querty}&from=${this.currentData}&sortBy=publishedAt&apiKey=${this.apiKey}`;

  async getResource() {
    console.log(`fetch ${this.apiURL}`);

    const res = await fetch(this.apiURL);
    if (!res.ok) {
      throw new Error(
        `Could not ferch ${this.apiURL}` + `, received ${res.status}`
      );
    }
    const body = await res.json();
    return body;
  }

  getArticles = async () => {
    const res = await this.getResource();
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
