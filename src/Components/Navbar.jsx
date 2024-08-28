import React from "react";

const Navbar = ({ getTrack, keyword, setval }) => {
  return (
    <div className="w-full bg-slate-600 h-[15%] flex justify-center  items-center   ">
      <span className=" font-bold invisible sm:visible text-white whitespace-nowrap md:ml-6">
        Music-Player
      </span>

      <div className="flex w-full h-full  justify-center items-center gap-8">
        <input
          value={keyword}
          onChange={(event) => setval(event.target.value)}
          type="text"
          placeholder="Search Music"
          className=" h-[50%] w-[90%] md:w-[60%] rounded-md overflow-hidden text-center"
        />
        <button
          className="py-1 px-2 bg-white rounded-md w-20 h-10 mr-4"
          onClick={getTrack}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
