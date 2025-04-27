import { FaSearch } from "react-icons/fa";

function Navbar({ query, onHandleQuery, onHandleSearch, onKeyDownEnter }) {
  return (
    <nav className="flex items-center justify-between px-10 py-2">
      <a href="/" className="text-4xl font-bold text-blue-800">
        LoGo
      </a>
      <div className="flex items-center justify-end gap-2">
        <input
          onKeyDown={onKeyDownEnter}
          value={query}
          onChange={onHandleQuery}
          type="text"
          className="w-full border-b-2 border-slate-950 text-gray-900 outline-none placeholder:text-sm placeholder:text-gray-500"
          placeholder="search"
        />
        <button
          onClick={onHandleSearch}
          className="cursor-pointer hover:text-blue-500 active:text-blue-900"
        >
          <FaSearch />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
