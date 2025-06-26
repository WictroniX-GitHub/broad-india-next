"use client";

import Link from "next/link";

const blogs = [
  {
    title: "Sustainable Industrial Cooling Solutions",
    description:
      "Explore how BROAD India's vapor absorption chillers are transforming industrial cooling with zero electricity consumption and minimal environmental impact.",
    image:
      "https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    link: "/blogs",
  },
  {
    title: "CCHP Systems: The Future of Energy Efficiency",
    description:
      "Learn how Combined Cooling, Heating & Power systems are revolutionizing energy consumption in commercial and industrial facilities.",
    image:
      "https://m.economictimes.com/thumb/msid-69127844,width-1200,height-900,resizemode-4,imgsize-347903/construction-site-generators-types-features-of-generators-used-at-construction-sites.jpg",
    link: "/blogs",
  },
  {
    title: "Waste Heat Recovery: Turning Excess Heat into Savings",
    description:
      "Discover how industries are reducing costs and carbon footprint by utilizing waste heat for cooling applications through absorption technology.",
    image:
      "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(68)(134).jpg",
    link: "/blogs",
  },
];

export default function RecentNews() {
  return (
    <div className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <Link href={blog.link} className="btn btn-primary">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/blogs" className="btn btn-outline-primary px-5">
          More blogs
        </Link>
      </div>
    </div>
  );
}
