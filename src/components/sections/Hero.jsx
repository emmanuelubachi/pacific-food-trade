"use client";
import Image from "next/image";
import React from "react";
import HeroImg from "/public/p2.png";

const Hero = ({ countryName }) => {
  return (
    <section className="min-[1440px]:mt-8 mt-12 bg-gradient-to-t from-pri-12 to-white">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pretium quam id sem semper venenatis. Donec est leo, tincidunt ut
            ipsum vitae, volutpat congue turpis.
          </p>
        </div>
        <div className="my-0 sm:hidden flex flex-col items-end justify-center">
          <div className=" max-w-sm flex flex-col items-center">
            <Image
              src={HeroImg}
              alt="A picture of Emmanuel Ubachi"
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
