import { Article } from "../entities/Article";

export default class ArticleService {
  apiKey = "8cb1cd4070ba4b7c81ea4dcbaa198897";
  currentData = "2020-01-08";
  querty = "bitcoin";

  async getResource(query:string) {
    let apiURL = `https://newsapi.org/v2/everything?q=${query}&from=${this.currentData}&sortBy=publishedAt&apiKey=${this.apiKey}`;
    console.log(`fetch ${apiURL}`);
    const res = await fetch(apiURL);
    if (!res.ok) {
      throw new Error(`Could not ferch ${apiURL}` + `, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  getArticles = async (query: string) => {
    const res = await this.getResource(query);
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
