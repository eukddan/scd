import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useConsultingStore } from "../../store/store"; // ✅ Zustand 상태 가져오기

const navItems = [
  { label: "Home", to: "/" },
  { label: "탄소 감축 솔루션", to: "/consulting/step1" },
  { label: "결과 보고 분석", to: "/analysis" },
];

const Sidebar = () => {
  const location = useLocation();
  const { resetState } = useConsultingStore(); // ✅ Zustand 상태 초기화 함수 가져오기

  return (
    <aside className="bg-mainnavy text-white min-h-screen w-64 flex flex-col">
      {/* 로고 클릭 시 Zustand 초기화 */}
      <div className="h-16 py-5 px-6 font-bold text-xl border-b border-gray-700">
        <Link to="/" onClick={resetState}>
          <span className="text-white">Zero</span>
          <span className="text-mainmint">Fit</span>
        </Link>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="mt-6 flex-1">
        <ul>
          {navItems.map((item) => {
            let isActive = false;

            if (item.to === "/") {
              isActive = location.pathname === item.to;
            } else if (item.to.startsWith("/consulting/")) {
              isActive = location.pathname.startsWith("/consulting/");
            } else if (item.to === "/analysis") {
              isActive = location.pathname === "/analysis";
            }

            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={resetState} // ✅ 클릭 시 Zustand 초기화
                  className={`block py-3 px-6 transition-colors ${
                    isActive ? "bg-secondmint font-bold" : "hover:bg-gray-800"
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
