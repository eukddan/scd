import React from "react";

interface IndustrySelectorProps {
  industry: string;
  setIndustry: React.Dispatch<React.SetStateAction<string>>;
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({
  industry,
  setIndustry,
}) => {
  return (
    <div className="mb-10">
      <label className="block mb-1 text-gray-600">산업군</label>
      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
      >
        <option value="">선택해주세요</option>
        <option value="철강">철강</option>
        <option value="화학">화학</option>
        <option value="제조업">제조업</option>
      </select>
    </div>
  );
};

export default IndustrySelector;
