import React from "react";
import { Link } from "react-router-dom";

const HomePost = ({ post }) => {
  return (
    <div className="p-4 w-2/5 h-80 shadow-xl border-solid">
      <div className="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden w-full">
        <div className="p-6 flex flex-col h-full">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {post.title}
          </h1>
          <p className="leading-relaxed mb-3 grow">{post.desc}</p>
          <div className="flex items-center flex-wrap mb-2">
            <Link
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              to={{
                pathname: `/post/${post._id}`,
              }}
              state={{ post: post }}
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm ml-auto">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              {post.comments.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePost;
