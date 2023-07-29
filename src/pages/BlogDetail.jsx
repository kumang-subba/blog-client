import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useBlog from "../hooks/useBlog";

const BlogDetail = () => {
  const { fetchPostComment, fetchAllComments, allComments, setAllComments } =
    useBlog();
  const { state } = useLocation();
  const postTime = dayjs(state.postdate).format("MMM D YYYY");
  const [form, setForm] = useState({
    commenter: "",
    text: "",
  });
  const handlePostComment = async (e) => {
    e.preventDefault();
    const formData = JSON.stringify(form);
    setForm({
      commenter: "",
      text: "",
    });
    fetchPostComment(state.post._id, formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  useEffect(() => {
    if (state.post.comments.length > 0) {
      fetchAllComments(state.post._id);
    } else {
      setAllComments([]);
    }
  }, []);
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-20 mx-auto w-2/3">
        <div className="flex flex-col text-left w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mx-auto">
            {state.post.title}
          </h1>
          <span className="flex justify-between">
            <h2 className="text-xs tracking-widest font-serif title-font mb-1">
              {state.post.desc}
            </h2>
            <h2 className="text-xs tracking-widest font-serif title-font mb-1">
              {postTime}
            </h2>
          </span>
          <p className="leading-relaxed text-base">{state.post.text}</p>
        </div>
        {allComments.length > 0 ? (
          allComments.map((comment, index) => {
            return (
              <div
                className="flex-1 bg-indigo-200 text-gray-800 p-2 rounded-lg mb-2 relative"
                key={index}
              >
                {comment.commenter.length > 0 && (
                  <h1 className="text-md font-medium title-font mb-2 text-gray-900 mx-auto">
                    {comment.commenter}
                  </h1>
                )}
                <h2 className="text-xs tracking-widest font-serif title-font mb-1">
                  {dayjs(comment.date).format("MMM D YYYY hh:mm A")}
                </h2>
                <div>{comment.text}</div>
              </div>
            );
          })
        ) : (
          <div className="flex-1 bg-indigo-200 text-gray-800 p-2 rounded-lg mb-2 relative">
            <div>No comments</div>
          </div>
        )}
        <form action="" onSubmit={handlePostComment}>
          <div className="flex-1 bg-indigo-200 text-gray-800 p-2 rounded-lg mb-2 relative">
            <div className="relative mb-4 flex">
              <label
                htmlFor="commenter"
                className="leading-7 text-sm text-gray-600 min-w-max w-1/12"
              >
                Name:
              </label>
              <input
                value={form.commenter}
                onChange={handleChange}
                type="text"
                id="commenter"
                name="commenter"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 flex">
              <label
                htmlFor="text"
                className="leading-7 text-sm text-gray-600 w-1/12 min-w-max"
              >
                Comment*:
              </label>
              <input
                value={form.text}
                onChange={handleChange}
                type="text"
                id="text"
                name="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md">
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BlogDetail;
