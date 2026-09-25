import { Link } from "react-router-dom";
import data from "../../../posts.json";
export default function YouMayLike({ post }) {
  const posts = data.posts.filter(
    (p) => post.category === p.category && post.id !== p.id,
  );
  return (
    <>
      {posts.map((post, index) =>
        index < 3 ? (
          <Link
            className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
            to={`/blog/${post.slug}`}
            data-discover="true"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={post.image}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
              <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                {post.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                {post.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span className="flex items-center gap-2">
                  <img
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full"
                    src={post.author.avatar}
                  />
                  {post.author.name}
                </span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ) : (
          ""
        ),
      )}
    </>
  );
}
