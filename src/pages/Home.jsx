import React from "react";
import useBlog from "../hooks/useBlog";
import HomePost from "../components/HomePost";

const Home = () => {
  const { allPosts } = useBlog();
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to Blog Client for Blog API
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni porro
            sapiente rem ipsam repudiandae necessitatibus sit ad dignissimos!
            Corrupti non distinctio, pariatur quibusdam commodi amet numquam
            cupiditate illum quia a!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {allPosts?.map((post, index) => (
            <HomePost post={post} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
