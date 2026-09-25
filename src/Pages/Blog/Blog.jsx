import Head from "./../../Components/BlogComponents/Head";
import Articles from "./../../Components/BlogComponents/Articles";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Blog() {
  const [searchParam] = useSearchParams();
  const categoryFromUrl = searchParam.get("category");
  const [filter, setFilter] = useState(categoryFromUrl || "all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (categoryFromUrl) {
      setFilter(categoryFromUrl);
      setCurrentPage(1);
    }
  }, [categoryFromUrl]);

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Head
          filter={filter}
          setFilter={setFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Articles
          filter={filter}
          setFilter={setFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
