import React, { useState } from "react";
import Button from "./Button";

interface TagInputProps {
  /**
   * 입력된 태그 목록
   */
  tags: string[];

  /**
   * 태그가 추가될 때 실행되는 콜백
   */
  onAdd: (tag: string) => void;

  /**
   * 태그가 제거될 때 실행되는 콜백
   */
  onRemove: (tag: string) => void;

  /**
   * 라벨 텍스트
   */
  label?: string;

  /**
   * Input placeholder
   */
  placeholder?: string;

  /**
   * 추가적인 클래스명
   */
  className?: string;
}

/**
 * 태그 입력용 공통 컴포넌트
 * 예: 사용자에게 설비명을 여러 개 입력받을 때, 해시태그처럼 입력받을 때 등
 */
const TagInput: React.FC<TagInputProps> = ({
  tags,
  onAdd,
  onRemove,
  label = "태그 입력",
  placeholder = "설비명을 입력하세요",
  className = "",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onAdd(trimmed);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 폼 전송 방지
      handleAddTag();
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block mb-1 text-gray-600">{label}</label>}

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded p-2 flex-1"
        />
        <Button variant="primary" onClick={handleAddTag}>
          추가
        </Button>
      </div>

      {/* 태그 목록 */}
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded flex items-center gap-2"
          >
            <span>{tag}</span>
            <button
              onClick={() => onRemove(tag)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
