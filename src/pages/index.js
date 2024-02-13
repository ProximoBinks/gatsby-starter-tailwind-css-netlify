import React, { useState } from "react";
import Layout from "../components/Layout";
import heroImage from "../images/hero-image.svg";

const HomePage = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = () => {
    const codeToCopy = document.querySelector("#codeToCopy");
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy.textContent);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Gatsby Starter for Tailwind CSS & Netlify
            </h1>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              Kickstart your project with ease using our Gatsby Starter, designed for seamless integration with Tailwind CSS and effortless deployment on Netlify.
            </p>
          </div>
          <img
            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
            src={heroImage}
            alt="Gatsby and Tailwind CSS together"
          />
        </div>

        <div className="mt-10 mx-auto">
          <a
            href="https://github.com/ProximoBinks/gatsby-starter-tailwind-css-netlify"
            className="p-4 bg-teal-500 text-white text-xs rounded shadow hover:bg-teal-400"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-10 flex items-center p-3 mx-2 bg-white rounded shadow-xs sm:mx-auto">
          <code id="codeToCopy" className="text-gray-600 text-xs leading-xl">
            gatsby new my-project-name https://github.com/ProximoBinks/gatsby-starter-tailwind-css-netlify
          </code>
          <button
            onClick={handleCopyCode}
            className="ml-2 px-1 py-1 bg-teal-500 text-white text-xs rounded shadow hover:bg-teal-400"
          >
            {isCopied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;