export interface Article {
  id?: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string; //Поменять на Date
}

export interface FullArticle {
  id?: string;
  content: string;
  urlToImage: string;
}
