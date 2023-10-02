import React from "react";
import CountrySelector from "./components/CountrySelector";
import Image from "next/image";
import Background from "/public/p1.png";

const FeedingThePacific = () => {
  return (
    <>
      <header>
        <div className=" -z-[1] fixed w-screen h-screen">
          <Image
            alt="Fancy Background Image"
            src={Background}
            placeholder="blur"
            quality={100}
            priority={true}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <section className="m-0 h-[80vh] flex items-center justify-center">
          <div className="m-0 flex flex-col items-center justify-center sm:space-y-10 space-y-2 w-fit bg-pri-12/90 p-4 rounded-2xl">
            <h1
              className="mb-4 
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold leading-none tracking-tight 
            text-stone-700 "
            >
              Pacific Food Trade
            </h1>
            <CountrySelector />
          </div>
        </section>
      </header>
    </>
  );
};

export default FeedingThePacific;
