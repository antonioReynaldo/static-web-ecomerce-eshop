import { blogData } from "./blogData";
import CardBlog from "./CardBlog";

export default function Blog() {
  return (
    <section className="pb-20 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold dark:text-white mb-1.5">
            Recent News
          </h2>
          <p className="text-sm text-gray-400">Explore Our Blogs</p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {blogData.map((data, index) => (
            <CardBlog
              key={index}
              image={data.image}
              date={data.date}
              title={data.title}
              text={data.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
