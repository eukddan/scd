import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "탄소 감축 솔루션", to: "/consulting/step1" },
  { label: "결과 보고 분석", to: "/analysis" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="bg-mainnavy text-white min-h-screen w-64 flex flex-col">
      {/* 로고 또는 타이틀 영역 */}
      <div className="h-16 py-5 px-6 font-bold text-xl border-b border-gray-700">
        ZeroFit
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="mt-6 flex-1">
        <ul>
          {navItems.map((item) => {
            let isActive = false;

            if (item.to === "/") {
              isActive = location.pathname === item.to; // ✅ Home은 정확히 "/"일 때만 활성화
            } else if (item.to.startsWith("/consulting/")) {
              isActive = location.pathname.startsWith("/consulting/"); // ✅ "탄소 감축 솔루션" 활성화
            } else if (item.to === "/analysis") {
              isActive = location.pathname === "/analysis"; // ✅ "결과 보고 분석" 활성화
            }

            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={`block py-3 px-6 rounded-lg transition-colors ${
                    isActive ? "bg-gray-700 font-bold" : "hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
