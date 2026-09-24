import { useRef, useState } from "react";
import data from "../../../posts.json";
import ArticleCard from "../Common/ArticleCard/ArticleCard";
export default function Articles({ filter, setFilter , currentPage , setCurrentPage }) {
  const [view, setView] = useState("grid");
  const listTop = useRef(null);
  const posts = filter === "all" ? data.posts : data.posts.filter((post) => post.category === filter);
  const postsPerPage = 6;
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  function goToList(page) {
    setCurrentPage(page);
    listTop.current.scrollIntoView({ behavior: "smooth" });
  }

  function filterHelper(filter) {
    setFilter(filter);
    setCurrentPage(1);
  }

  return (
    <>
      <div
        ref={listTop}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5"
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض <span className="font-bold text-white">{posts.length}</span>{" "}
            مقالات
            <span>
              {" "}
              {filter !== "all" ? (
                <span className="font-bold text-orange-500 capitalize">
                  {" "}
                  <span className="text-neutral-400 font-normal">في</span>{" "}
                  {filter}
                </span>
              ) : (
                " "
              )}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                className={`p-2 rounded-lg transition-all duration-300 ${view === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                title="عرض شبكي"
                onClick={() => setView("grid")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>

              <button
                className={`p-2 rounded-lg transition-all duration-300 ${view === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                title="عرض قائمة"
                onClick={() => setView("list")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {filter !== "all" ? (
              <button
                onClick={() => filterHelper("all")}
                className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                مسح الفلاتر
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={`${view === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}`}
        >
          {currentPosts.map((post) => (
            <ArticleCard post={post} key={post.id} view={view} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            className={`p-3 rounded-xl border transition-all duration-300  ${currentPage <= 1 ? `bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed` : `bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]`}`}
            disabled={currentPage <= 1}
            onClick={() => goToList(currentPage - 1)}
          >
            <svg
              className="w-5 h-5 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-1">
            {[...Array(Math.ceil(posts.length / postsPerPage))].map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToList(idx + 1)}
                  className={`${currentPage === idx + 1 ? "min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white" : "min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"}`}
                >
                  {idx + 1}
                </button>
              ),
            )}
          </div>

          <button
            className={`p-3 rounded-xl border transition-all duration-300  ${currentPage >= Math.ceil(posts.length / postsPerPage) ? `bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed` : `bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]`}`}
            disabled={currentPage >= Math.ceil(posts.length / postsPerPage)}
            onClick={() => goToList(currentPage + 1)}
          >
            <svg
              className="w-5 h-5 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <p className="text-center text-neutral-500 mt-4 text-sm">
          صفحة {currentPage} من {Math.ceil(posts.length / postsPerPage)}
        </p>
      </div>
    </>
  );
}
