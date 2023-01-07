import { LogoutIcon, SparklesIcon } from "@heroicons/react/outline";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import Input from "./Input";
import News from "./News";
import Post from "./Post";
import Sidebar from "./Sidebar";
import { signOut } from "next-auth/react";

const Feed = ({ newsResults }) => {
  const [posts, setPosts] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showFeeds, setShowFeeds] = useState(false);
  const [articleNumber, setArticleNumber] = useState(3);
  const [randomUserNum, setRandomUserNum] = useState(3);
  const [minDisplays, setMinDisplays] = useState(false);

  const router = useRouter();
  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  // This function is used to query out the every posts with its timestamp made by users to the data base
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleFeeds = () => {
    setShowFeeds(!showFeeds);
  };

  const showfew = () => {
    if (articleNumber === 3) {
      setArticleNumber(articleNumber + 3);
    }
    setMinDisplays(false);
  };

  const hideFew = () => {
    if (articleNumber > 3) {
      setArticleNumber(articleNumber - 3);
    } else {
      if (articleNumber === 3) {
        setMinDisplays(true);
      }
    }
  };
  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center   sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <div className="text-lg sm:text-xl font-bold">Home</div>

        <div
          onClick={toggleFeeds}
          className="text-sm text-[#fff] hover:underline ml-auto cursor-pointer bg-gray-900 p-1 rounded-full"
        >
          {" "}
          <p className="sm:hidden"> Latest Story</p>
        </div>

        <div className="hoverAnimation w-9 h-9 flex items-center justify-center px-0 ml-auto">
          <SparklesIcon onClick={toggleMenu} className="h-5 text-white" />
        </div>

        <LogoutIcon
          onClick={signOut}
          className="h-5 sm:hidden text-red-500 cursor-pointer"
        />
      </div>

      {showFeeds && (
        <div className="text-[#d9d9d9] sm:hidden space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
          <h4 className="font-bold text-xl px-4">What&apos;s happening</h4>
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
        </div>
      )}

      {showMenu && <Sidebar showMenu={showMenu} />}

      <Input />
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
