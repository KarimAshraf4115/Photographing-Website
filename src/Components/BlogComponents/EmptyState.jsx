export default function EmptyState({setFilter , setSearch}) {
    function clear() {
        setFilter("all");
        setSearch("");
    }
  return (
    <>
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-neutral-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">لا توجد مقالات</h3>
        <p className="text-neutral-400 mb-6">
          حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
        </p>
        <button onClick={() => clear()} className="btn-primary inline-flex items-center gap-2">
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          إعادة تعيين الفلاتر
        </button>
      </div>
    </>
  );
}
