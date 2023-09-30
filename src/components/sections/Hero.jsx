"use client";
import Image from "next/image";
import React from "react";
import HeroImg from "/public/p2.png";

const Hero = ({ countryName }) => {
  return (
    <section className="min-[1440px]:mt-8 sm:mt-12 mt-24 bg-gradient-to-t from-pri-12 to-white">
      <div className="grid max-w-screen-xl px-4 pt-8 mx-auto md:gap-8 xl:gap-0 lg:pt-16 sm:grid-cols-12">
        <div className="mr-auto place-self-center sm:col-span-5">
          <h1
            className="max-w-2xl mb-2
            text-stone-600
            font-bold tracking-wider leading-none
            text-xl
            min-[400px]:text-2xl
            sm:text-3xl 
            md:text-3xl
            lg:text-4xl 
            xl:text-5xl"
          >
            {countryName}
          </h1>
          <p
            className="max-w-2xl
            text-gray-600 
            font-light 
            text-xs leading-6 tracking-tight
            sm:text-sm 
            md:leading-7
            lg:text-base
            lg:leading-8 lg:mb-8"
          >
            Explore the intricate web of international food trade as it pertains
            to this unique Pacific nation. Gain a deeper understanding of{" "}
            {countryName}&apos;s role in the global food market, from its
            trading partners to the types of food it imports.
          </p>
        </div>
        <div className="my-0 sm:hidden flex flex-col items-end justify-center">
          <div className=" max-w-sm flex flex-col items-center">
            <Image
              src={HeroImg}
              alt="A picture of Emmanuel Ubachi"
              priority={true}
              style={{
                maxWidth: "80%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="hidden lg:mt-0 sm:flex sm:justify-end sm:col-span-7">
          <Image
            src={HeroImg}
            alt="A picture of Emmanuel Ubachi"
            priority={true}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
