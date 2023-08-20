import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext({});

export const BlogContextProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allComments, setAllComments] = useState([]);
  const fetchAllPosts = async () => {
    setLoading(true);
    fetch("https://blog-api-poaf.onrender.com/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (!data.err) {
          setAllPosts(data.allPosts);
        }
      });
  };
  const fetchPostComment = async (_id, formData) => {
    fetch(`https://blog-api-poaf.onrender.com/api/posts/${_id}/comments`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
    }).then((res) => {
      if (res.status === 200) {
        fetchAllComments(_id);
      }
    });
  };
  const fetchAllComments = async (_id) => {
    fetch(`https://blog-api-poaf.onrender.com/api/posts/${_id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.err) {
          setAllComments(data.allComments);
        } else {
          setAllComments([]);
        }
      });
  };
  useEffect(() => {
    fetchAllPosts();
  }, [allComments]);

  return (
    <BlogContext.Provider
      value={{
        allPosts,
        fetchPostComment,
        fetchAllComments,
        allComments,
        setAllComments,
        loading,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
