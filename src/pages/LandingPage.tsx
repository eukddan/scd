import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-mainnavy text-white font-sans">
      {/* 헤더 */}
      <header className="w-full bg-mainnavy py-4 px-8 flex justify-start items-center shadow-md">
        <h1 className="text-2xl font-bold">
          <span>Zero</span>
          <span className="text-mainmint">Fit</span>
        </h1>
        <nav className="hidden px-16 md:flex gap-6 text-gray-300">
          <Link
            to="/consulting/step1"
            className="hover:text-white transition mr-6"
          >
            컨설팅
          </Link>
          <a href="#contact" className="hover:text-white transition">
            문의하기
          </a>
        </nav>
      </header>

      {/* Hero 섹션 */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-7xl font-bold text-mainmint mb-4">Zero-Fit</h1>
        <h2 className="text-5xl  font-semibold mb-10">
          당신의 기업에 딱 맞는 Net-Zero 솔루션
        </h2>
        <p className=" text-gray-300 mt-4 mb-8 max-w-2xl ">
          Zero-Fit은 기업의 산업군, 설비, 예산을 반영해 최적의 온실가스 감축
          솔루션을 추천하고, 감축 효과를 분석해 탄소 중립(Net-Zero) 목표 달성을
          지원합니다.
        </p>
        <p className="text-lg font-bold text-gray-300 mt-4 mb-6 max-w-2xl">
          탄소 중립을 향한 여정, Zero-Fit 과 함께 시작하세요!
        </p>

        <p className="mt-6 text-4xl font-semibold">
          <span className="text-secondmint">Net-</span>
          <span className="text-white">Zero</span>
          <span className="text-secondmint">, Let's </span>
          <span className="text-white">Zero</span>
          <span className="text-secondmint">!</span>
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
