import data from "../../../posts.json";
export default function Head({ filter, setFilter, setCurrentPage }) {
  const categories = data.categories;

  function filterHelper(filter) {
    setFilter(filter);
    setCurrentPage(1);
  }

  return (
    <>
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label inline-flex items-center gap-2 mb-6">
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            مدونتنا
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            استكشف <span className="gradient-text">مقالاتنا</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>

      <div className="sticky top-20 z-40 bg-[#0a0a0a] backdrop-blur-xl border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-80">
              <input
                placeholder="ابحث في المقالات..."
                className="input-dark w-full px-5 py-3 pr-12"
                type="text"
                defaultValue=""
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => filterHelper("all")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === "all" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
              >
                جميع المقالات
              </button>

              {categories.map((category) => (
                <button
                  onClick={() => filterHelper(category.name)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === category.name ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
