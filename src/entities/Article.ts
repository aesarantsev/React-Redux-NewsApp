export interface Article {
  id?: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface FullArticle {
  id?: string;
  content: string;
  urlToImage: string;
}
