export type BlogContentItem =
  | { type: "paragraph"; content: string }
  | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; content: string }
  | { type: "image"; content: string }
  | { type: "list"; content?: string; items: string[] }
  | { type: "quote"; content: string }
  | { type: "code"; language?: string; content: string }
  | { type: "faq"; faqItems: { question: string; answer: string }[] };

export interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  meta?: {
    description: string;
    keywords: string[];
  };
  content: string | BlogContentItem[];
  image: string;
}
