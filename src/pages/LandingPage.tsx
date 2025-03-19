import React from "react";
import Header from "../components/header/RandingPageHeader";
import HeroSection from "../components/section/HeroSection"; // HeroSection import

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-mainnavy text-white">
      {/* 헤더 */}
      <Header />
      {/* Hero 섹션 */}
      <HeroSection />
    </div>
  );
};

export default LandingPage;
