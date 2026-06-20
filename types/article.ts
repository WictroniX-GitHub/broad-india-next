export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  author?: string;
  meta?: {
    description: string;
    keywords: string[];
  };
  content: string;
  image: string;
}
