import React from 'react';

interface ReusableButtonProps {
  text: string;
  widthClass?: string; // Tailwind width class, e.g. 'w-full', 'w-64', etc.
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  text,
  widthClass = '',
  onClick,
  showArrow = true,
  className = '',
}) => {
  return (
    <button
      className={`px-5 py-3 text-white font-semibold bg-[#F0B73F] rounded-3xl flex items-center ${showArrow ? 'justify-center md:justify-start space-x-3' : 'justify-center'} mx-auto md:mx-0 ${widthClass} ${className} transition duration-200 hover:bg-[#d49c2e]  hover:shadow-lg`}
      onClick={onClick}
    >
      <span className={showArrow ? 'mr-3' : ''}>{text}</span>
      {showArrow && (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 bg-gray-500 opacity-60 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M18 12H6" />
        </svg>
      )}
    </button>
  );
};

export default ReusableButton;
