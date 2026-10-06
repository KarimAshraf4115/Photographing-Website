import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/blog", label: "المدونة" },
  { to: "/about", label: "من نحن" },
];
const base =
  "block rounded-full text-sm font-medium transition-all duration-300 py-2.5 px-5 text-neutral-400";
const active = "bg-linear-to-r from-orange-500 to-orange-600 text-white";
const inActive = "hover:bg-[#262626] hover:text-white";
export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  function toggleMobileMenu() {
    setisOpen(!isOpen);
  }
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
        <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center h-20">
          <div>
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 overflow-hidden group-hover:scale-105 transition-all duration-300">
                <img
                  src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-transparent bg-linear-to-r from-white to bg-neutral-300 bg-clip-text text-xl font-bold">
                  عدسة
                </span>
                <span className="text-orange-400/80 text-xs hidden sm:block tracking-wide">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `${base} ${isActive ? active : inActive}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <NavLink to="/blog" className="btn-primary text-sm">
              ابدأ القراءة
            </NavLink>
          </div>

          {isOpen ? (
            <button
              onClick={() => setisOpen(false)}
              className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              <svg
                className="w-6 h-6"
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
            </button>
          ) : (
            <button
              onClick={() => toggleMobileMenu()}
              className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              <svg
                className="w-6 h-6"
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
          )}
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
            <div className="flex flex-col space-y-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setisOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                        : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Link
                onClick={() => setisOpen(false)}
                className="btn-primary text-sm text-center mt-2"
                to="/blog"
                data-discover="true"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
