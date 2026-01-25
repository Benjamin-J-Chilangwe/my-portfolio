import React from "react";
import { FaDownload } from "react-icons/fa";
import MyImage from "../../public/images/MyImage.jpg";

const Home = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-6 text-white bg-black">
      <div className="grid items-center w-full max-w-6xl gap-8 md:grid-cols-2">
        {/* Left Section */}
        <div className="space-y-5">
          <h1 className="text-5xl font-bold text-white">
            Welcome to my portfolio<span className="text-green-500">.</span>
          </h1>
          <h2 className="text-2xl font-semibold">I’m Benjamin Chilangwe</h2>
          <p className="text-gray-400">
            A Computer Scientist by profession. I’m passionate about technology
            and solving real-world problems through software development. Take a
            look at my projects and experience as I continue my journey in the
            tech industry.
          </p>
          <a
            href="https://abgafrrufzrvvwxrcbsl.supabase.co/storage/v1/object/sign/portfolio-files/Benjamin%20Chilangwe%20CV%20Update%201.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMDJhNjI5OS1kMzk4LTQzODctYmVjZi1lMTZlYTY2YTk2OGYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tZmlsZXMvQmVuamFtaW4gQ2hpbGFuZ3dlIENWIFVwZGF0ZSAxLnBkZiIsImlhdCI6MTc2OTMzMzAwMCwiZXhwIjoxODAwODY5MDAwfQ.qTd5SocBNlt1yw2vUnBe76h3hJF3ch4JcRzyO5d484s"
            className="inline-flex items-center px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600"
            download
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={MyImage}
            alt="Image of Ben"
            className="object-cover border-4 border-green-500 rounded-full shadow-lg w-72 h-72"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
