import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 my-4 shadow-lg ">
      <div className="flex col-span-1">
        <img className="h-8 mx-2"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="hamburger"
        />
        <img className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        />
      </div>

      <div className="col-span-10 items-center ">
        <input className=" bg-gray-100 rounded-l-full w-1/2  border border-black focus:outline-none px-6 py-2" type="text" placeholder="Search" />
        <button className=" border border-black col-span-1 bg-gray-100  px-6 rounded-r-3xl py-2 text-md ">Search</button>
      </div>

      <div className="col-span-1 ">
        <img className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
