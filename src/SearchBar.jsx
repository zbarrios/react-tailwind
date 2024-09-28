function SearchBar({searchText,handleChangeText}) {
    return (
      <div className="flex h-full bg-slate-50 relative justify-between mr-8 mt-2">
        <div className="relative w-9/12">
          <input
            type="search"
            className="block w-full p-4 text-sm text-gray-900 border-2 border-gray-300  bg-gray-50"
            placeholder="Search"
            required=""
            value={searchText}
            onChange={(e)=>handleChangeText(e.target.value)}
          />
        </div>
        <div className="relative">
          <button
            type="submit"
            className="h-full text-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 0 border-2 border-red-300/60  bg-gray-50"
          >
            <svg
              className="w-5 h-5 text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <div className="bg-black/90 h-full w-full absolute left-1 top-1 -z-10"></div>
        </div>
      </div>
    );
  }
  

  export {SearchBar};