import React from "react";
import Image from "next/image";
import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-[575px] px-14 flex flex-col justify-center items-center gap-4">
          <span className="font-bold p-4 text-5xl">Patronize</span>
          <p className="text-xl">
            A crowdfunding platform for creators to fund their projects.
          </p>
          <p className="text-xl">
            A place where your fans can buy you a chai. Unleash the power of
            your fans and get your projects funded.
          </p>
          <div className="flex pt-5 gap-4">
            <Link href={"/login"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Start Here
              </span>
            </button>
            </Link>
            <Link href={"/about"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Read More
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-1 w-[95%] mx-auto bg-blue-950"></div>
      <div className="flex flex-col gap-20 items-center justify-center py-20">
        <h1 className="text-2xl font-bold">Get Paid for your Contribution</h1>
        <div className="flex justify-around mx-auto w-[90%] max-w-screen-2xl">
          <span className="flex flex-col gap-3 items-center">
            <img
              className="rounded-full md:h-32 h-20 w-20 object-cover md:w-32"
              src="/typing.gif"
              alt=""
            />
            <h1 className="font-bold text-center md:text-left p-2 md:p-0 text-sm md:text-xl">Support Creators You Love</h1>
            <p className="text-center md:text-left p-2 md:p-0 text-sm md:text-base">
              Help your favorite creators grow by funding their projects.
            </p>
          </span>
          <span className="flex flex-col gap-3 items-center">
            <img
              className="rounded-full md:h-32 h-20 w-20 object-cover md:w-32"
              src="/coin.gif"
              alt=""
            />
            <h1 className="font-bold text-center md:text-left p-2 md:p-0 text-sm md:text-xl">Easy & Transparent</h1>
            <p className="text-center md:text-left p-2 md:p-0 text-sm md:text-base">
              Connect with creators simply and transparently.
            </p>
          </span>
          <span className="flex flex-col gap-3 items-center">
            <img
              className="rounded-full md:h-32 h-20 w-20 object-cover md:w-32"
              src="/comm.gif"
              alt=""
            />
            <h1 className="font-bold text-center md:text-left p-2 md:p-0 text-sm md:text-xl">Build a Community</h1>
            <p className="text-center md:text-left p-2 md:p-0 text-sm md:text-base">
              Join a thriving network of creators and supporters.
            </p>
          </span>
        </div>
      </div>
      <div className="h-1 w-[95%] mx-auto mt-10 bg-blue-950"></div>
      <div className="flex flex-col gap-20 items-center justify-center py-20">
        <h1 className="text-2xl font-bold">Learn More About Us</h1>
        <div className="flex justify-around mx-auto w-[90%] max-w-screen-2xl">
          <span className="flex flex-col gap-3 items-center">
            <img
              className="rounded-full md:h-32 h-20 w-20 object-cover md:w-32"
              src="/rocket.gif"
              alt=""
            />
            <h1 className="font-bold text-center md:text-left p-2 md:p-0 text-sm md:text-xl">Our Mission</h1>
            <p className="text-center md:text-left p-2 md:p-0 text-sm md:text-base">
            Empower creators to bring their ideas to life with community support.
            </p>
          </span>
          <span className="flex flex-col gap-3 items-center">
            <img
              className="rounded-full md:h-32 h-20 w-20 object-cover md:w-32"
              src="/whyus.gif"
              alt=""
            />
            <h1 className="font-bold text-center md:text-left p-2 md:p-0 text-sm md:text-xl">Why Choose Us</h1>
            <p className="text-center md:text-left p-2 md:p-0 text-sm md:text-base">
            Transparent, creator-focused, and easy-to-use platform.
            </p>
          </span>
          <span className="flex flex-col gap-3 items-center">
            <img
              className="rounded-full md:h-32 h-20 w-20 object-fill md:w-32"
              src="/offer.gif"
              alt=""
            />
            <h1 className="font-bold text-center md:text-left p-2 md:p-0 text-sm md:text-xl">What We Offer</h1>
            <p className="text-center md:text-left p-2 md:p-0 text-sm md:text-base">
            Tools to connect, fund, and grow together with your audience.
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
