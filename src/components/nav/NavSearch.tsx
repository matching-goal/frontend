'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const NavSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <form
      className="form-control"
      onSubmit={(e) => {
        e.preventDefault();
        if (!inputRef.current) {
          return;
        }
        if (inputRef.current.value === '') {
          return;
        }
        router.replace(`/matchingList?keyword=${inputRef.current?.value}`);
      }}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          className="grow"
          placeholder="매칭 검색"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
    </form>
  );
};

export default NavSearch;
