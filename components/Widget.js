import { SearchIcon } from "@heroicons/react/outline";
// import Trending from "./Trending";
import { useState } from "react";
import News from "./News";
// import { AnimatePresence, motion } from "framer-motion";

function Widget({ newsResults }) {
  const [articleNumber, setArticleNumber] = useState(3);
  // const [randomUserNum, setRandomUserNum] = useState(3);
  const [minDisplays, setMinDisplays] = useState(false);

  const hideFew = () => {
    if (articleNumber > 3) {
      setArticleNumber(articleNumber - 3);
    } else {
      if (articleNumber === 3) {
        setMinDisplays(true);
      }
    }
  };

  const showfew = () => {
    if (articleNumber === 3) {
      setArticleNumber(articleNumber + 3);
    }
    setMinDisplays(false);
  };

  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="text-[#d9d9d9] sticky top-16 space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
        {newsResults.slice(0, articleNumber).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <div className="flex items-center justify-center w-auto">
          <button
            onClick={showfew}
            className="hover:bg-white hover:bg-opacity-[0.06] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light"
          >
            Show more
          </button>

          <button
            onClick={hideFew}
            className="hover:bg-white hover:bg-opacity-[0.06] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light"
          >
            hide few
          </button>
        </div>
        {minDisplays && (
          <div className="text-red-400 flex justify-center items-center pb-4 cursor-pointer">
            you have reached the least of latest happenings
          </div>
        )}
      </div>

      {/* Thos is a page recieving data from a json api buh i decided to comment it out */}
      {/* <div className="sticky top-16 text-gray-400 space-y-3 bg-[#15181c] pt-2 rounded-xl w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        <AnimatePresence>
          {randomUsersResults?.slice(0, randomUserNum).map((randomUser) => (
            <motion.div
              key={randomUser.login.username}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div
                key={randomUser.login.username}
                className="flex items-center px-4 py-2  cursor-pointer hover:bg-white hover:bg-opacity-[0.07] transition duration-500 ease-out"
              >
                <img
                  className="rounded-full"
                  width="40"
                  src={randomUser.picture.thumbnail}
                  alt=""
                />
                <div className="truncate ml-4 leading-5">
                  <h4 className="font-bold hover:underline text-[14px] truncate">
                    {randomUser.login.username}
                  </h4>
                  <h5 className="text-[13px] text-gray-500 truncate">
                    {randomUser.name.first + " " + randomUser.name.last}
                  </h5>
                </div>
                <button className="ml-auto bg-black hover:bg-[#1d9bf0] text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                  Follow
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <button
          onClick={() => setRandomUserNum(randomUserNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div> */}
    </div>
  );
}

export default Widget;
