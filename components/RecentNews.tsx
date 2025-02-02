"use client";

import Link from "next/link";

const articles = [
  {
    title: "Sustainability in Action",
    description:
      "Use as a basis for class discussion rather than to illustrate either effective or ineffective handling of an administrative situation. A real approach to sustainable development for higher life quality on the environment.",
    image:
      "https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    link: "http://en.broad.com/Storage/article/d86c3db4c155464b9fe10dbf82db7c7f.pdf",
  },
  {
    title: "Rethink Conventional Construction",
    description:
      "Traditional construction practices can be costly, inefficient, and detrimental on the environment. In this article, Zhang Yue, CEO, BROAD group reflects on how industry can change.",
    image:
      "https://m.economictimes.com/thumb/msid-69127844,width-1200,height-900,resizemode-4,imgsize-347903/construction-site-generators-types-features-of-generators-used-at-construction-sites.jpg",
    link: "/blogs-and-articles",
  },
  {
    title: "World's Top 25 Eco Innovators",
    description:
      "Fortune presents our inaugural list of the World's Top 25 Eco-Innovators. To identify them, we surveyed dozens of experts in the sustainability world. Here's the report article.",
    image:
      "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(68)(134).jpg",
    link: "/blogs-and-articles",
  },
];

export default function RecentNews() {
  return (
    <div className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-4">{article.title}</h4>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <Link href={article.link} className="btn btn-primary">
                Know more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/blogs-and-articles"
          className="btn btn-outline-primary px-5"
        >
          More articles
        </Link>
      </div>
    </div>
  );
}
