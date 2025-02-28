import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "탄소 감축 솔루션", to: "/consulting/step1" },
  { label: "결과 보고 분석", to: "/analysis" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-mainnavy text-white min-h-screen w-64 md:w-60 lg:w-64 xl:w-72 2xl:max-w-[288px] 3xl:w-80 flex flex-col">
      {/* 로고 또는 타이틀 영역 */}
      <div className="py-5 px-6 font-bold text-xl border-b border-gray-700">
        ZeroFit
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="mt-6 flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block py-3 px-6 rounded-lg transition-colors ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-800"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
