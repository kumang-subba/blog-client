import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const useBlog = () => {
  return useContext(BlogContext);
};

export default useBlog;
