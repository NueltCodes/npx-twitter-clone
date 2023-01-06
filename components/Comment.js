import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import Moment from "react-moment";

function Comment({ comment }) {
  const [chartbar, setChartbar] = useState(false);
  const [shareIcon, setShareIcon] = useState(false);
  const [like, setLike] = useState(false);
  const [comments, setComments] = useState(false);

  const reply = () => {
    setComments(!comments);
    setLike(false);
    setChartbar(false);
    setShareIcon(false);
  };

  const likeComment = () => {
    setLike(!like);
    setChartbar(false);
    setShareIcon(false);
    setComments(false);
  };

  const share = () => {
    setShareIcon(!shareIcon);
    setChartbar(false);
    setLike(false);
    setComments(false);
  };

  const chartbars = () => {
    setChartbar(!chartbar);
    setShareIcon(false);
    setLike(false);
    setComments(false);
  };

  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      <img
        src={comment?.userImg}
        alt=""
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              <span className="ml-1.5 text-sm sm:text-[15px]">
                @{comment?.tag}{" "}
              </span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className="text-[#d9d9d9] mt-0.5 max-w-lg overflow-scroll scrollbar-hide text-[15px] sm:text-base">
              {comment?.comment}
            </p>
          </div>

          <div className="icon group flex-shrink-0">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        {comments && (
          <div className="w-[100%] flex items-center space-x-2 ml-4">
            <ChatIcon className="h-4 text-[#1d9bf0]" />
            <p className="text-[13px] text-[#1d9bf0] ">
              upgrade to premium plan for this service
            </p>
          </div>
        )}

        {like && (
          <div className="w-[100%] flex items-center space-x-2 ml-4">
            <HeartIcon className="h-4 text-pink-600" />
            <p className="text-[13px] text-[#1d9bf0]">
              upgrade to premium plan for this service
            </p>
          </div>
        )}

        {shareIcon && (
          <div className="w-[100%] flex items-center space-x-2 ml-4">
            <ShareIcon className="h-4 text-gray-500" />
            <p className="text-[13px] text-[#1d9bf0] ">
              upgrade to premium plan for this service
            </p>
          </div>
        )}

        {chartbar && (
          <div className="w-[100%] flex items-center space-x-2 ml-4">
            <ChartBarIcon className="h-4 text-green-500" />
            <p className="text-[13px] text-[#1d9bf0] ">
              upgrade to premium plan for this service
            </p>
          </div>
        )}

        <div className="text-[#6e767d] flex justify-between w-10/12">
          <div onClick={reply} className="icon group">
            <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>

          <div className="flex items-center space-x-1 group">
            <div
              onClick={likeComment}
              className="icon group-hover:bg-pink-600/10"
            >
              <HeartIcon className="h-5 group-hover:text-pink-600" />
            </div>
            <span className="group-hover:text-pink-600 text-sm"></span>
          </div>

          <div onClick={share} className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>

          <div onClick={chartbars} className="icon group">
            <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
