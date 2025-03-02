import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-roboto">
      {/* 헤더 */}
      <header className="w-full bg-mainnavy text-white py-4 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">ZeroFit</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#features" className="hover:text-gray-300 transition">
            기능 소개
          </a>
          <a href="#cta" className="hover:text-gray-300 transition">
            시작하기
          </a>
        </nav>
        <Button
          variant="secondary"
          onClick={() => navigate("/consulting/step1")}
        >
          솔루션 시작
        </Button>
      </header>

      {/* Hero 섹션 */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Net Zero 솔루션, ZeroFit
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          AI 기반 온실가스 감축 솔루션을 통해 지속 가능성을 실현하세요.
        </p>
        <Button
          variant="primary"
          className="mt-6 px-6 py-3 text-lg"
          onClick={() => navigate("/consulting/step1")}
        >
          무료로 시작하기
        </Button>
      </section>

      {/* 기능 소개 섹션 */}
      <section id="features" className="px-6 py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">ZeroFit의 핵심 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">AI 기반 추천</h3>
            <p className="text-gray-600">
              산업별 최적화된 감축 기술을 AI가 분석하여 추천합니다.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">탄소 배출 분석</h3>
            <p className="text-gray-600">
              현재 탄소 배출량을 진단하고 맞춤형 솔루션을 제공합니다.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">실시간 데이터 시각화</h3>
            <p className="text-gray-600">
              데이터 기반 시각화로 탄소 감축 효과를 한눈에 확인하세요.
            </p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section
        id="cta"
        className="px-6 py-20 bg-blue-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          지금 바로 ZeroFit을 시작하세요!
        </h2>
        <p className="text-lg mb-6">
          AI 기반 탄소 감축 솔루션을 통해 지속 가능한 미래를 만드세요.
        </p>
        <Button
          variant="secondary"
          className="px-6 py-3 text-lg"
          onClick={() => navigate("/ConsultingStep1")}
        >
          무료로 체험하기
        </Button>
      </section>

      {/* 푸터 */}
      <footer className="bg-mainnavy text-white text-center py-6 mt-auto">
        <p>© 2025 ZeroFit. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
