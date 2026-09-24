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
                  end
                  className={({isActive}) => `${base} ${isActive? active : inActive}`}
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
            <NavLink to='/blog' className="btn-primary text-sm">
              ابدأ القراءة
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
