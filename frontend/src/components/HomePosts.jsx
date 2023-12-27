import React from "react";

const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Uses of AI
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@atharvamali</p>
          <div className="flex space-x-2 text-sm">
            <p>16/02/2023</p>
            <p>16/02/2023</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus autem
          minus quae corporis maxime nemo velit labore, id a enim accusantium,
          nostrum recusandae molestias totam! Labore distinctio quo eligendi
          soluta Read more"
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
