export const SearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="w-full h-12 px-4 rounded-md border-2 border-slate-100"
        placeholder="Search..."
      />
      <button className="h-12 w-12 bg-slate-100 text-white rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 m-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a5 5 0 11-10 0 5 5 0 0110 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a5 5 0 11-10 0 5 5 0 0110 0z"
          />
        </svg>
      </button>
    </div>
  )
}
