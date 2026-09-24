import Head from "./../../Components/BlogComponents/Head";
import Articles from "./../../Components/BlogComponents/Articles";
import { useState } from "react";
export default function Blog() {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Head filter={filter} setFilter={setFilter} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Articles filter={filter} setFilter={setFilter} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </>
  );
}
