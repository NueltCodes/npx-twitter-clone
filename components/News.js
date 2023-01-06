import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";

function News({ article }) {
  return (
    <div>
      <a href={article.url} target="_blank">
        <div className="hover:bg-white hover:bg-opacity-[0.07] px-4 py-2 cursor-pointer transition duration-300 ease-out flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-[#b0b2b3] text-xs pr-4 font-medium">
              {article.title}
            </p>
            <h6 className="font-bold max-w-[250px] text-sm">
              {article.source.name}
            </h6>
            {/* <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
              Trending with{" "}
              {article.tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag}
                </span>
              ))}
            </p> */}
          </div>

          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              width={70}
              height={70}
              objectfit="cover"
              className="rounded-2xl"
              alt="Image"
            />
          ) : (
            <div className="icon group">
              <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
            </div>
          )}
        </div>{" "}
      </a>
    </div>
  );
}

export default News;
