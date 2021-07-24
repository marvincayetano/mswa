import React, { useState, useRef, useEffect } from 'react';

interface NavSearchProps {
  className?: string;
  fnInput?: Function;
  setIsModalOpen?: Function;
  isEnabled?: boolean;
}

export function NavSearch({
  className,
  fnInput,
  setIsModalOpen,
  isEnabled = fnInput !== null,
}: NavSearchProps) {
  // This is for how long before search starts
  const [input, setInput] = useState('');
  const DONE_TYPING_INTERVAL = 1500;
  const inputElement = useRef<null | any>(null);
  useEffect(() => {
    if (inputElement && inputElement.current) inputElement!.current.focus();
  });

  function finishTyping() {
    if (fnInput) {
      fnInput(input.toLowerCase());
    }
  }

  let typingTimer: any;

  return (
    <div className={`${className} relative text-gray-600 focus-within:text-gray-400`}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </span>
      <input
        type="search"
        name="q"
        className="w-full py-2 text-sm bg-white rounded-md pl-10 focus:outline-none text-gray-900"
        placeholder="Search..."
        autoComplete="off"
        ref={inputElement}
        onClick={() => {
          if (setIsModalOpen) setIsModalOpen(true);
        }}
        onFocus={(e) => e.target.select()}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyUp={() => {
          clearTimeout(typingTimer);
          typingTimer = setTimeout(finishTyping, DONE_TYPING_INTERVAL);
        }}
        onKeyDown={() => {
          clearTimeout(typingTimer);
        }}
      />
    </div>
  );
}
